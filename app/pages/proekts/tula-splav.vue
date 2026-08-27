<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект : НПО Сплав имени А.Н. Ганичева - кран консольный электрический',
        meta:
            [
                { name: 'description', content: 'Реализованный проект консольного ручного крана грузоподъёмностью до 0,5 тонн, для предприятия «НПО Сплав имени А.Н. Ганичева» в городе Тула' },
                { name: 'keywords', content: 'проекты крантехмаш, консольный ручной кран, консольный кран' },
                { property: 'og:title', content: 'Реализованный проект для НПО Сплав имени А.Н. Ганичева' },
                { property: 'og:description', content: 'Реализованный проект консольного ручного крана грузоподъёмностью до 0,5 тонн, для предприятия «НПО Сплав имени А.Н. Ганичева» в городе Тула' },
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
            <div class="proekt-inner">
                <h1>НПО Сплав имени А.Н. Ганичева</h1>
                <div class="proekt-tech">
                    <ul>
                        <li><span>Тип изделия</span>кран консольный ручной</li>
                        <li><span>Грузоподъёмность</span>до 0,5 тонн</li>
                        <li><span>Срок изготовления</span>15 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Тула</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для НПО «Сплав» имени А. Н. Ганичева был разработан электрический консольный кран грузоподъёмностью до 0,5 тонны. Благодаря отлаженному производственному процессу срок изготовления оборудования составил 15 рабочих дней. После доставки на предприятие были выполнены монтажные и пусконаладочные работы с проверкой всех рабочих режимов крана. По завершении испытаний оборудование было принято заказчиком вместе с комплектом необходимой эксплуатационной и технической документации.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/tula-splav/02.avif"
                    src="/files/proekt/tula-splav/02.avif"
                    alt="Монтаж консольного ручного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/03.avif"
                    src="/files/proekt/tula-splav/03.avif"
                    alt="Монтаж консольного ручного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/04.avif"
                    src="/files/proekt/tula-splav/04.avif"
                    alt="Монтаж консольного ручного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/05.avif"
                    src="/files/proekt/tula-splav/05.avif"
                    alt="Монтаж консольного ручного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/06.avif"
                    src="/files/proekt/tula-splav/06.avif"
                    alt="Тестовый запуск консольного ручного крана"
                />
                <div class="link-back">
                    <NuxtLink to="/produce/konsole-mech">Производство консольных ручных кранов</NuxtLink>
                </div>
                <div class="link-back">
                    <NuxtLink to="/proekts">&larr; Вернуться в проекты</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>