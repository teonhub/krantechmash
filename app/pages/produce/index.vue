<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Продукция грузоподъемного оборудования ПК «Крантехмаш»',
        meta:
            [
                { name: 'description', content: 'Производство грузоподъемного оборудования от ПК «Крантехмаш». Мы производим под ключ опорные однобалочные и двухбалочный краны, подвесные однопролетные или двухпролетный, а также козловые и консольные краны. Концевые балки к опорному или подвесному крану'},
                { name: 'keywords', content: 'подвесной однопролетный, подвесной двухпролетный, козловой кран, консольный электрический, консольный ручной, опорный кран' },
                { property: 'og:title', content: 'Продукция грузоподъемного оборудования ПК «Крантехмаш»' },
                { property: 'og:description', content: 'Производство грузоподъемного оборудования от ПК «Крантехмаш». Мы производим под ключ опорные однобалочные и двухбалочный краны, подвесные однопролетные или двухпролетный, а также козловые и консольные краны. Концевые балки к опорному или подвесному крану' },
                { property: 'og:image', content: '/image/short/shorts-001.jpg' },
                { property: 'og:url', content: 'https://ktmcranes.ru'+`${route.path}` },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'ПК «Крантехмаш»' },
                { property: 'og:locale', content: 'ru_RU' }
            ]
        })

</script>

<template>
    <main>
        <AppLayoutHeading title="Продукция Крантехмаш" />
            <div class="engineering">
                <div class="grid-4">
                    <AppEngineeringItems />
                </div>
            </div>
        <AppShorts />
    </main>
</template>