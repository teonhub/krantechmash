<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект : Русполимет - кран козловой',
        meta:
            [
                { name: 'description', content: 'Реализованный проект крана козлового грузоподъёмностью до 16 тонн, для предприятия «Русполимет» в городе Кулебаки. Изготовление изделия и монтаж составил 45 рабочих дней' },
                { name: 'keywords', content: 'проекты крантехмаш, кран козловой' },
                { property: 'og:title', content: 'Реализованный проект для Русполимет' },
                { property: 'og:description', content: 'Реализованный проект крана козлового грузоподъёмностью до 16 тонн, для предприятия «Русполимет» в городе Кулебаки. Изготовление изделия и монтаж составил 45 рабочих дней' },
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
                <h1>Русполимет</h1>
                <div class="proekt-tech">
                    <ul>
                        <li><span>Тип изделия</span>кран козловой</li>
                        <li><span>Грузоподъёмность</span>до 16 тонн</li>
                        <li><span>Срок изготовления</span>45 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Кулебаки</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для предприятия «Русполимет» был реализован проект по производству козлового крана грузоподъёмностью 16 тонн. Грузоподъёмное оборудование было спроектировано с учётом требований заказчика и особенностей его производственной площадки. После доставки изделия на объект, специалисты выполнили монтаж крана и провели комплекс пусконаладочных работ. Завершающим этапом стали тестовые испытания, оформление акта приёмки и передача заказчику полного комплекта документации.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/kulebaki-ruspolimet/02-600w.avif"
                    src="/files/proekt/kulebaki-ruspolimet/02.avif"
                    alt="Монтаж стрелы с лебедкой козлового крана"
                />
                <GalleryItem
                    srcset="/files/proekt/kulebaki-ruspolimet/03-600w.avif"
                    src="/files/proekt/kulebaki-ruspolimet/03.avif"
                    alt="Тестовый запуск козлового крана"
                />
                <GalleryItem
                    srcset="/files/proekt/kulebaki-ruspolimet/04-600w.avif"
                    src="/files/proekt/kulebaki-ruspolimet/04.avif"
                    alt="Тестовый запуск козлового крана"
                />
                <GalleryItem
                    srcset="/files/proekt/kulebaki-ruspolimet/05-600w.avif"
                    src="/files/proekt/kulebaki-ruspolimet/05.avif"
                    alt="Тестовый запуск козлового крана"
                />
                <GalleryItem
                    srcset="/files/proekt/kulebaki-ruspolimet/06-600w.avif"
                    src="/files/proekt/kulebaki-ruspolimet/06.avif"
                    alt="Отладка рабочего режима козлового крана"
                />
                <div class="link-back">
                    <NuxtLink to="/produce/gantry">Производство козловых кранов</NuxtLink>
                </div>
                <div class="link-back">
                    <NuxtLink to="/proekts">&larr; Вернуться в проекты</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>