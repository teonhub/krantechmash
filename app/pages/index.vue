<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'ПК «Крантехмаш» - Производство грузоподъемного оборудования любой сложности.',
        meta:
            [
                { name: 'description', content: 'ПК «Крантехмаш» собственное конструкторское бюро и производственные мощности. Изготовляем краны консольные, опорный однобалочный и двухбалочный, краны мостовые, козловые а так же подвесные однопролетное и двухпролетные.' },
                { name: 'keywords', content: '' },
                { property: 'og:title', content: '' },
                { property: 'og:description', content: '' },
                { property: 'og:image', content: '' },
                { property: 'og:url', content: 'https://ktmcranes.ru' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'ПК «Крантехмаш»' },
                { property: 'og:locale', content: 'ru_RU' }
            ]
        })

</script>

<template>
    <main>
    <AppSalutation />
    <AppEngineering />
    <AppProekt />
    <AppShorts />
    </main>
</template>