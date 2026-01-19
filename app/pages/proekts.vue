<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'ПК «Крантехмаш»',
        meta:
            [
                { name: 'description', content: '' },
                { name: 'keywords', content: '' },
                { property: 'og:title', content: '' },
                { property: 'og:description', content: '' },
                { property: 'og:image', content: '' },
                { property: 'og:url', content: 'https://ktmcranes.ru'+`${route.path}` },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'ПК «Крантехмаш»' },
                { property: 'og:locale', content: 'ru_RU' }
            ]
        })

</script>

<template>
    <main>
        <AppLayoutHeading title="Реализованные проекты" />
        <div class="content-page">
            <p class="_temp">Идёт обновление раздела.<br>Пожалуйста, посетите раздел позже.<br><br><NuxtLink to="/">Перейти на главную</NuxtLink></p>
        </div>
    </main>
</template>

<style scoped>

._temp{
    font-family: "PT Mono", serif;
    font-size: 16px;
    line-height: 32px;
    padding: 150px 0;
}

._temp a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #3d3d3d;
    padding-bottom: 2px;
}

@media (max-width: 575.98px) {
    ._temp {
        padding: 10px 0 120px 0;
    }
    ._temp a {
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid #3d3d3d;
        padding-bottom: 2px;
    }
}

</style>