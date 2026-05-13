export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    plugins: [
        '~/plugins/fancybox.client.ts'
    ],
    build: {
        transpile: ['@fancyapps/ui'],
    },
    modules: [
        '@pinia/nuxt',
        'yandex-metrika-module-nuxt3'
    ],
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
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' }
            ],
            script: [
                { src: '/files/js/dialog-polyfill.min.js', defer: true },
                { src: '/files/js/sender.form.js', defer: true }    
            ],
        }
    },
    yandexMetrika: {
        id: '69875563',
        ignoreBots: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        defer: true
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
    }
})