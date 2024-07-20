// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss'],
	css: ['~/assets/css/main.css'],
	devServer: {
		port: 8000,
	},
});
