<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проекты | ПК Крантехмаш',
        meta:
            [
                { name: 'description', content: 'Реализованные проекты ПК Крантехмаш' },
                { name: 'keywords', content: 'проекты крантехмаш' },
                { property: 'og:title', content: 'Проекты | ПК Крантехмаш' },
                { property: 'og:description', content: '' },
                { property: 'og:image', content: '/image/short/shorts-001.jpg' },
                { property: 'og:url', content: 'https://ktmcranes.ru'+`${route.path}` },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'ПК Крантехмаш' },
                { property: 'og:locale', content: 'ru_RU' }
            ]
        })

</script>

<template>
    <main>
        <div class="proekt-wrap">
            <div class="proekt-heading">
                <LayoutFigureBlack />
                <h2>Реализованные проекты</h2>
            </div>
            <div class="grid-4">
                <AppProektItem 
                    url="/proekts/medvedeva"
                    image="/files/proekt/orel-medvd/01.avif"
                    name="г.Орёл, Завод им.Медведева"
                />
                <AppProektItem 
                    url="#"
                    image="/files/proekt/orel-medvd/01.avif"
                    name="г.Орёл, Завод им.Медведева"
                />
                <AppProektItem 
                    url="#"
                    image="/files/proekt/orel-medvd/01.avif"
                    name="г.Орёл, Завод им.Медведева"
                />
                <AppProektItem 
                    url="#"
                    image="/files/proekt/orel-medvd/01.avif"
                    name="г.Орёл, Завод им.Медведева"
                />
            </div>
        </div>
    </main>
</template>