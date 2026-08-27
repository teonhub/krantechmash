<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект : промышленное предприятие г. Волгоград - кран опорный двухбалочный',
        meta:
            [
                { name: 'description', content: 'Реализованный проект крана высоконагрузочного опорного двухбалочного грузоподъёмностью до 20 тонн, для промышленного предприятия в городе Волгоград' },
                { name: 'keywords', content: 'проекты крантехмаш, кран опорный двухбалочный, кран двухбалочный, кран опорный' },
                { property: 'og:title', content: 'Реализованный проект крана опорного двухбалочного' },
                { property: 'og:description', content: 'Реализованный проект крана высоконагрузочного опорного двухбалочного грузоподъёмностью до 20 тонн, для промышленного предприятия в городе Волгоград' },
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
                        <li><span>Тип изделия</span>кран опорный двухбалочный</li>
                        <li><span>Грузоподъёмность</span>до 20 тонн</li>
                        <li><span>Срок изготовления</span>35 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Волгоград</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для волгоградского промышленного предприятия был спроектирован и изготовлен опорный двухбалочный кран. Оборудование рассчитано на высокие нагрузки в цехе заказчика весом до 20 тонн. Двухбалочная конструкция обеспечивает повышенную жёсткость и устойчивость при подъёме крупногабаритных грузов. Производство завершено за 35 рабочих дней, после чего кран доставлен и смонтирован на объекте. Проведены испытания под нагрузкой, подписан акт приёмки, передана нормативно-техническая документация.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-1/02-600w.avif"
                    src="/files/proekt/volgograd-prom-1/02.avif"
                    alt="Монтаж порного двухбалочного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-1/03-600w.avif"
                    src="/files/proekt/volgograd-prom-1/03.avif"
                    alt="Монтаж порного двухбалочного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-1/04-600w.avif"
                    src="/files/proekt/volgograd-prom-1/04.avif"
                    alt="Монтаж порного двухбалочного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-1/05-600w.avif"
                    src="/files/proekt/volgograd-prom-1/05.avif"
                    alt="Монтаж порного двухбалочного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-1/06-600w.avif"
                    src="/files/proekt/volgograd-prom-1/06.avif"
                    alt="Монтаж порного двухбалочного крана"
                />
                <GalleryItem
                    srcset="/files/proekt/volgograd-prom-1/07-600w.avif"
                    src="/files/proekt/volgograd-prom-1/07.avif"
                    alt="Монтаж порного двухбалочного крана"
                />
                <div class="link-back">
                    <NuxtLink to="/produce/dubble-girder">Производство опорных двухбалочных кранов</NuxtLink>
                </div>
                <div class="link-back">
                    <NuxtLink to="/proekts">&larr; Вернуться в проекты</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>