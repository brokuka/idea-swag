// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

	css: [
		'@unocss/reset/tailwind.css',
	],

  modules: ['@nuxt/eslint', "@unocss/nuxt"],

  eslint: {
    config: {
      standalone: false,
    },
  },

	features: {
		inlineStyles: false,
	},
})