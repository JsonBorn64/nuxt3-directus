export default defineNuxtConfig({
    modules: [
        "nuxt-directus",
        '@nuxtjs/tailwindcss',
        '@nuxtjs/apollo'
    ],
    directus: {
		url: "https://directus.calmdev.site/",
	},
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://directus.calmdev.site/graphql'
            }
        },
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },
})