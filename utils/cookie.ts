const setCookie = (cname: String, value: String, expireDays: any) => {
  if (process.client) {
    if (cname === "countryIsoCode") {
      if (!getCookie("countryFixed") && expireDays === 0) {
        setCookie("countryFixed", "true", 0);
        document.cookie =
          "countryIsoCode= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    if (expireDays > 0) {
      const expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + value + ";" + expires + ";path=/";
    } else {
      document.cookie = cname + "=" + value + ";path=/";
    }
  }
};

function getCookie(cname: String) {
  if (process.client) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

function eraseCookie(name: any) {
  if (process.client) document.cookie = name + "=; Max-Age=-99999999;";
}

export { setCookie, getCookie, eraseCookie };
