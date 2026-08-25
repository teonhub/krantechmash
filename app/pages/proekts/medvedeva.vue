<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект : завод им.Медведева - кран опорный однобалочный',
        meta:
            [
                { name: 'description', content: 'Реализованный проект опорного однобалочного крана грузоподъёмностью до 5 тонн, для предприятия «Завод им. Медведева» в городе Орле' },
                { name: 'keywords', content: 'проекты крантехмаш, кран опорный однобалочный, кран однобалочный' },
                { property: 'og:title', content: 'Реализованный проект для завода им.Медведева' },
                { property: 'og:description', content: 'Реализованный проект опорного однобалочного крана грузоподъёмностью до 5 тонн, для предприятия «Завод им. Медведева» в городе Орле' },
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
                <h1>Завод им.Медведева</h1>
                <div class="proekt-tech">
                    <ul>
                        <li><span>Тип изделия</span>кран опорный однобалочный</li>
                        <li><span>Грузоподъёмность</span>до 5 тонн</li>
                        <li><span>Срок изготовления</span>30 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Орёл</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для предприятия «Завод им. Медведева» в городе Орле был спроектирован и изготовлен опорный однобалочный мостовой кран грузоподъёмностью до 5 тонн. Конструкция рассчитана под конкретные производственные задачи заказчика с учётом параметров цеха и режима эксплуатации. Изделие было доставлено на предприятие и проведены монтажные работы. Осущественны тестовые запуски, подписан акт приёмки, передан полный пакет эксплуатационной документации.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/orel-medvd/02-600w.avif"
                    src="/files/proekt/orel-medvd/02.avif"
                    alt="Монтаж опорного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/orel-medvd/03-600w.avif"
                    src="/files/proekt/orel-medvd/03.avif"
                    alt="Монтаж опорного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/orel-medvd/05-600w.avif"
                    src="/files/proekt/orel-medvd/05.avif"
                    alt="Монтаж опорного однобалочного крана в цеху"
                />
                <GalleryItem
                    srcset="/files/proekt/orel-medvd/06-600w.avif"
                    src="/files/proekt/orel-medvd/06.avif"
                    alt="Монтаж опорного однобалочного крана в цеху"
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