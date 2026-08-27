<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект: промышленное предприятие г. Волгоград - кран опорный однобалочный',
        meta:
            [
                { name: 'description', content: 'Реализованный третий проект крана опорного однобалочного грузоподъёмностью до 5 тонн, для промышленного предприятия в городе Волгоград' },
                { name: 'keywords', content: 'проекты крантехмаш, кран однобалочный' },
                { property: 'og:title', content: 'Реализованный проект крана опорного однобалочного' },
                { property: 'og:description', content: 'Реализованный третий проект крана опорного однобалочного грузоподъёмностью до 5 тонн, для промышленного предприятия в городе Волгоград' },
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
                        <li><span>Срок изготовления</span>35 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Волгоград</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для промышленного предприятия в Волгограде был реализован проект по изготовлению опорного однобалочного крана грузоподъёмностью до 5 тонн. Конструкция крана была разработана с учётом технических требований заказчика и особенностей производственного помещения. После завершения изготовления опорного крана, была осуществлена доставка на объект, на котором профильные специалисты выполнили монтажные работы. По окончании пусконаладочных работ оборудование прошло приёмку и было передано заказчику вместе с комплектом технической документации.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/02-600w.avif"
                    src="/files/proekt/volgograd-prom-3/02.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/03-600w.avif"
                    src="/files/proekt/volgograd-prom-3/03.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/04-600w.avif"
                    src="/files/proekt/volgograd-prom-3/04.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/05-600w.avif"
                    src="/files/proekt/volgograd-prom-3y/05.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/06-600w.avif"
                    src="/files/proekt/volgograd-prom-3/06.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/07-600w.avif"
                    src="/files/proekt/volgograd-prom-3/07.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/08-600w.avif"
                    src="/files/proekt/volgograd-prom-3/08.avif"
                    alt="Монтаж порного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-3/09-600w.avif"
                    src="/files/proekt/volgograd-prom-3/09.avif"
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