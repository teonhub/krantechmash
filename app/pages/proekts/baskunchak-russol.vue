<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект : Руссоль - кран опорный однобалочный',
        meta:
            [
                { name: 'description', content: 'Реализованный проект крана опорного однобалочного грузоподъёмностью до 15 тонн, для предприятия «Руссоль» в поселке Нижний Баскунчак' },
                { name: 'keywords', content: 'проекты крантехмаш, кран опорный однобалочный, кран опорный' },
                { property: 'og:title', content: 'Реализованный проект для Руссоль' },
                { property: 'og:description', content: 'Реализованный проект крана опорного однобалочного грузоподъёмностью до 15 тонн, для предприятия «Руссоль» в поселке Нижний Баскунчак' },
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
                <h1>Руссоль</h1>
                <div class="proekt-tech">
                    <ul>
                        <li><span>Тип изделия</span>кран опорный однобалочный</li>
                        <li><span>Грузоподъёмность</span>до 15 тонн</li>
                        <li><span>Срок изготовления</span>25 рабочих дней</li>
                        <li><span>Локация заказчика</span>п. Нижний Баскунчак</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для предприятия «Руссоль» был изготовлен опорный однобалочный мостовой кран грузоподъёмностью 15 тонн. Проектирование оборудования выполнялось с учётом поставленных производственных задач и требований к дальнейшей эксплуатации крана. Срок изготовления оборудования составил 25 рабочих дней. После производства, оборудование было доставлено на объект заказчика, где проведены монтажные работы, настройка систем и тестовые запуски. После успешной проверки работоспособности мостовой кран был передан заказчику с оформлением приёмочной документации.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/baskunchak-russol/02-600w.avif"
                    src="/files/proekt/baskunchak-russol/02.avif"
                    alt="Концевая балка к опорному однобалочному крану"
                />
                <GalleryItem
                    srcset="/files/proekt/baskunchak-russol/03-600w.avif"
                    src="/files/proekt/baskunchak-russol/03.avif"
                    alt="Концевая балка к опорному однобалочному крану"
                />
                <GalleryItem
                    srcset="/files/proekt/baskunchak-russol/04-600w.avif"
                    src="/files/proekt/baskunchak-russol/04.avif"
                    alt="Концевая балка к опорному однобалочному крану"
                />
                <GalleryItem
                    srcset="/files/proekt/baskunchak-russol/05-600w.avif"
                    src="/files/proekt/baskunchak-russol/05.avif"
                    alt="Кран опорный однобалочный"
                />
                <GalleryItem
                    srcset="/files/proekt/baskunchak-russol/06-600w.avif"
                    src="/files/proekt/baskunchak-russol/06.avif"
                    alt="Монтаж опорного однобалочного крана"
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