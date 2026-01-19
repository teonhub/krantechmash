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
        <AppLayoutHeading title="Использование файлов-Cookie" />
            <div class="content-page">
                <div class="cookie">

                    <h3>Что такое cookie?</h3>
                    <p>Cookie (куки) — небольшие текстовые файлы на вашем компьютере, где сохраняются данные посещаемых вами сайтов.</p>

                    <h3>Зачем мы использует сookie?</h3>
                    <p>Cookie помогают нам понять, что вам нравится на сайте, а что стоит изменить — с ними мы можем сделать сайт удобным для каждого посетителя.</p>
                    
                    <h3>Какие cookie использует сайт?</h3>
                    <p>Статистика, которая необходима для анализа поведения наших посетителей на сайте для улучшения сайта. Сбор статистики происходит через наших партнеров: Yandex Metrika.</p>
                    
                    <h3>Можно ли отключить сookie?</h3>
                    <p>Да, вы можете отключить их в настройках безопасности браузера. Настройки нужно изменить во всех браузерах, которыми вы пользуетесь. Как это сделать, можно посмотреть в инструкции браузера.</p>
                
                </div>
            </div>
        </main>
</template>