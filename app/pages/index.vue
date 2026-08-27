<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'ПК Крантехмаш - завод-изготовитель грузоподъемного оборудования',
        meta:
            [
                { name: 'description', content: 'Решения для промышленности: грузоподъёмные краны любой сложности до 50 тонн. Концевые балки, консольные, козловые, опорные и подвесные краны, перегрузочные устройства. Полный цикл от конструкторскго бюро (проектирование) до ввода в эксплуатацию. Доставка промышленных кранов по всей РФ.' },
                { name: 'keywords', content: 'грузоподъёмные краны, производство краны, завод кранов, крантехмаш' },
                { property: 'og:title', content: 'Завод-изготовитель грузоподъемного оборудования' },
                { property: 'og:description', content: 'Решения для промышленности: грузоподъёмные краны любой сложности до 50 тонн. Концевые балки, консольные, козловые, опорные и подвесные краны, перегрузочные устройства. Полный цикл от конструкторскго бюро (проектирование) до ввода в эксплуатацию. Доставка промышленных кранов по всей РФ.' },
                { property: 'og:image', content: '/image/short/shorts-001.jpg' },
                { property: 'og:url', content: 'https://ktmcranes.ru' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'ПК Крантехмаш' },
                { property: 'og:locale', content: 'ru_RU' }
            ]
        })

</script>
<template>
    <main>
    <AppSalutation />
    <AppEngineering />
    <AppProekt />
    <AppShorts />
    </main>
</template>