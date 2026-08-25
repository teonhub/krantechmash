<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект : Мосводоканал - кран консольный ручной',
        meta:
            [
                { name: 'description', content: 'Реализованный проект консольного ручного крана грузоподъёмностью до 0,5 тонн, для предприятия «Мосводоканал» в городе Москва' },
                { name: 'keywords', content: 'проекты крантехмаш, консольный ручной кран, консольный кран' },
                { property: 'og:title', content: 'Реализованный проект для Мосводоканал' },
                { property: 'og:description', content: 'Реализованный проект консольного ручного крана грузоподъёмностью до 0,5 тонн, для предприятия «Мосводоканал» в городе Москва' },
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
                <h1>Мосводоканал</h1>
                <div class="proekt-tech">
                    <ul>
                        <li><span>Тип изделия</span>кран консольный ручной</li>
                        <li><span>Грузоподъёмность</span>до 0,5 тонн</li>
                        <li><span>Срок изготовления</span>20 рабочих дней</li>
                        <li><span>Локация заказчика</span>город Москва</li>
                    </ul>
                </div>
                <div class="proekt-content">
                    <p>Для предприятия «Мосводоканал» был изготовлен консольный ручной кран грузоподъёмностью до 0,5 тонн. Конструкция оборудования была спроектирована с учётом условий эксплуатации и задач, поставленных заказчиком. Срок изготовления составил 20 рабочих дней. После изготовления кран был доставлен на объект, где специалисты выполнили монтаж и проверку работоспособности оборудования. По результатам тестовых запусков был оформлен акт приёмки и передан комплект технической документации.</p>
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/moscow-vodokanal/02-600w.avif"
                    src="/files/proekt/moscow-vodokanal/02.avif"
                    alt="Кран консольный ручной в рабочем режиме"
                />
                <GalleryItem
                    srcset="/files/proekt/moscow-vodokanal/03-600w.avif"
                    src="/files/proekt/moscow-vodokanal/03.avif"
                    alt="Кран консольный ручной в рабочем режиме"
                />
                <GalleryItem
                    srcset="/files/proekt/moscow-vodokanal/04-600w.avif"
                    src="/files/proekt/moscow-vodokanal/04.avif"
                    alt="Кран консольный ручной в разобранном виде"
                />
                <GalleryItem
                    srcset="/files/proekt/moscow-vodokanal/05-600w.avif"
                    src="/files/proekt/moscow-vodokanal/05.avif"
                    alt="Кран консольный ручной в разобранном виде"
                />
                <GalleryItem
                    srcset="/files/proekt/moscow-vodokanal/06-600w.avif"
                    src="/files/proekt/moscow-vodokanal/06.avif"
                    alt="Лебедка консольного ручного крана"
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