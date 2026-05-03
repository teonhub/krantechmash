<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Реализованные проекты ПК Крантехмаш',
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
                    url="/proekts/moscow-vodokanal"
                    image="/files/proekt/moscow-vodokanal/01.avif"
                    name="г.Москва, «Мосводоканал»"
                />
                <AppProektItem 
                    url="/proekts/tula-splav"
                    image="/files/proekt/tula-splav/01.avif"
                    name="г.Тула, Завод НПО «СПЛАВ»"
                />
                <AppProektItem 
                    url="/proekts/kulebaki-ruspolimet"
                    image="/files/proekt/kulebaki-ruspolimet/01.avif"
                    name="г.Кулебаки, «Русполимет»"
                />
                <AppProektItem 
                    url="/proekts/baskunchak-russol"
                    image="/files/proekt/baskunchak-russol/01.avif"
                    name="г.н.Баскунчак, «Руссоль»"
                />
                <AppProektItem 
                    url="/proekts/volgograd-prom-1"
                    image="/files/proekt/volgograd-prom-1/01.avif"
                    name="г.Волгоград, Пром.предприятие"
                />
                <AppProektItem 
                    url="/proekts/volgograd-prom-2"
                    image="/files/proekt/volgograd-prom-3/01.avif"
                    name="г.Волгоград, Пром.предприятие"
                />
                <AppProektItem 
                    url="/proekts/volgograd-prom-3"
                    image="/files/proekt/volgograd-prom-2/01.avif"
                    name="г.Волгоград, Пром.предприятие"
                />
            </div>
        </div>
    </main>
</template>