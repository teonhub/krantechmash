export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    build: {
        transpile: ['@fancyapps/ui'],
    },
    modules: ['@pinia/nuxt'], 
    css: [
        '~/assets/css/typeface.css',
        '~/assets/css/normalize.css',
        '~/assets/css/layout.main.css',
        '~/assets/css/layout.mscr.css',
        '@fancyapps/ui/dist/fancybox/fancybox.css'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: { lang: 'ru' },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [ { name: 'format-detection', content: 'telephone=no' } ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=PT+Mono&display=swap' }
            ],
            script: [
                { src: '/files/js/dialog-polyfill.min.js', defer: true },
                { src: '/files/js/sender.form.js', defer: true }
            ],
        }
    }
})