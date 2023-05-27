export default defineNuxtConfig({
    modules: [
        "nuxt-directus",
        '@nuxtjs/tailwindcss',
        '@vite-pwa/nuxt',
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
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Nuxt3-Directus',
            short_name: "Nuxt3",
            description: "Testing Nuxt 3 PWA",
            theme_color: "#166534",
            background_color: "#166534",
            display: "standalone",
            icons: [
                {
                    src: "icons/icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png"
                },
                {
                    src: "icons/icon-96x96.png",
                    sizes: "96x96",
                    type: "image/png"
                },
                {
                    src: "icons/icon-128x128.png",
                    sizes: "128x128",
                    type: "image/png"
                },
                {
                    src: "icons/icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png"
                },
                {
                    src: "icons/icon-152x152.png",
                    sizes: "152x152",
                    type: "image/png"
                },
                {
                    src: "icons/icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "icons/icon-384x384.png",
                    sizes: "384x384",
                    type: "image/png"
                },
                {
                    src: "icons/icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        },
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,json,md,txt,svg,webp,ico,png,jpg}'],
            globIgnores: ['**/node_modules/**'],
            runtimeCaching: [
                {
                    handler: 'NetworkOnly',
                    urlPattern: /https:\/\/directus.calmdev.site\/api\/.*\/*.json/,
                    method: 'GET',
                    options: {
                        backgroundSync: {
                            name: 'myQueueName',
                            options: {
                                maxRetentionTime: 24 * 60
                            }
                        }
                    }
                }
            ]
        },
        devOptions: {
            enabled: false,
            type: 'module'
        }
    },
    nitro: {
        prerender: {
            routes: ['/'],
        }
    }
})