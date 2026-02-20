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
                    url="/proekts/kolomna-vpk"
                    image="/files/proekt/kolomna-vpk/01.avif"
                    name="г.Коломна, ВПК"
                />
                <AppProektItem 
                    url="/proekts/kolomna-vpk-odnobalochniy"
                    image="/files/proekt/kolomna-vpk-odnobalochniy/01.avif"
                    name="г.Коломна, ВПК"
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
                    url="/proekts/kolomna-vpk-5"
                    image="/files/proekt/kolomna-vpk-5/01.avif"
                    name="г.Коломна, ВПК"
                />
            </div>
        </div>
    </main>
</template>