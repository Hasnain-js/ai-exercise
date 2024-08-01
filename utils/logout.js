import axios from "axios"

export const logout = () => {
const url = useRuntimeConfig().public.API_BASE_URL + 'MyInterviewAdvisor/public/api/logout'

    axios(url, {
        method: 'POST',
        headers: {
            ...useRequestHeaders(),
            Authorization: `Bearer ${getCookie('access_token')}`

        },
    }).then(async (res) => {
        console.log(res)
        const message = res.data.message
        await Toast.fire({
            icon: 'success',
            text: message ||'You are logout successfully.'
        })
        useUserStore().eraseUserData()
        navigateTo('/')
    }).catch((error) => {
        const message = error.response?.data?.message
        Toast.fire({
            icon: 'error',
            text: message
        })
    })
}
