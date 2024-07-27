// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	runtimeConfig: {
		public: {
			API_BASE_URL: 'https://wrapupbybilal.com/'
		}
	},
	modules: ['@nuxtjs/tailwindcss'],
	css: ['~/assets/css/main.css', '~/assets/css/toast.css'],
	devServer: {
		port: 8000,
	},
});
