// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        "nuxt-directus",
        '@nuxtjs/tailwindcss',
        '@nuxtjs/apollo',
    ],
    directus: {
        url: "http://localhost:8055",
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
                httpEndpoint: 'http://45.91.169.26/graphql'
            }
        },
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },
})