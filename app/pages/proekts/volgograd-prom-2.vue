<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект: промышленное предприятие г. Волгоград - кран опорный однобалочный',
        meta:
            [
                { name: 'description', content: 'Реализованный второй проект крана опорного однобалочного грузоподъёмностью до 5 тонн, для промышленного предприятия в городе Волгоград' },
                { name: 'keywords', content: 'проекты крантехмаш, кран опорный' },
                { property: 'og:title', content: 'Реализованный проект крана опорного однобалочного' },
                { property: 'og:description', content: 'Реализованный второй проект крана опорного однобалочного грузоподъёмностью до 5 тонн, для промышленного предприятия в городе Волгоград' },
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
                <h1>Промышленное предприятие</h1>
                <div class="proekt-tech">
                    <ul>
                        <li><span>Тип изделия</span>кран опорный однобалочный</li>
                        <li><span>Грузоподъёмность</span>до 5 тонн</li>
                        <li><span>Срок изготовления</span>20 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Волгоград</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для промышленного предприятия Волгограда был изготовлен опорный однобалочный мостовой кран грузоподъёмностью до 5 тонн. На этапе проектирования были учтены требования заказчика к характеристикам оборудования и условиям его эксплуатации. После поставки на объект, специалисты «Крантехмаш» выполнили монтаж грузоподъёмного оборудования. Запуск и проверку его функционирования в рабочих режимах. Завершением проекта стало оформление технической документации и передача оборудования заказчику.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-2/02-600w.avif"
                    src="/files/proekt/volgograd-prom-2/02.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-2/03-600w.avif"
                    src="/files/proekt/volgograd-prom-2/03.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-2/04-600w.avif"
                    src="/files/proekt/volgograd-prom-2/04.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-2/05-600w.avif"
                    src="/files/proekt/volgograd-prom-2/05.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <div class="link-back">
                    <NuxtLink to="/produce/single-girder">Производство опорных однобалочных кранов</NuxtLink>
                </div>
                <div class="link-back">
                    <NuxtLink to="/proekts">&larr; Вернуться в проекты</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>