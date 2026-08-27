<script setup lang="ts">

    interface EngineeringItem {
        url:   string,
        avif:  string,
        jpeg:  string,
        name:  string,
        price: string
    }

    interface Props {
        limit?: number
    }

    const props = withDefaults(defineProps<Props>(), {
        limit: undefined
    })

    const items: EngineeringItem[] = [
        {
            url: '/produce/konsole-electric',
            jpeg: '/image/engineering/konsole-electric.jpg',
            avif: '/image/engineering/konsole-electric.avif',
            name: 'Консольный электрический',
            price: '10 т'
        },
        {
            url: '/produce/konsole-mech',
            jpeg: '/image/engineering/konsole-mech.jpg',
            avif: '/image/engineering/konsole-mech.avif',
            name: 'Консольный ручной',
            price: '10 т'
        },
        {
            url: '/produce/konsole-wall',
            jpeg: '/image/engineering/konsole-wall.jpg',
            avif: '/image/engineering/konsole-wall.avif',
            name: 'Консольный настенный',
            price: '320 кг'
        },
        {
            url: '/produce/single-girder',
            jpeg: '/image/engineering/single-girder.jpg',
            avif: '/image/engineering/single-girder.avif',
            name: 'Опорный однобалочный',
            price: '20 т'
        },
        {
            url: '/produce/dubble-girder',
            jpeg: '/image/engineering/dubble-girder.jpg',
            avif: '/image/engineering/dubble-girder.avif',
            name: 'Опорный двухбалочный',
            price: '50 т'
        },
        {
            url: '/produce/suspended-single-span',
            jpeg: '/image/engineering/suspended-dubble-span.jpg',
            avif: '/image/engineering/suspended-dubble-span.avif',
            name: 'Подвесной однопролетный',
            price: '16 т'
        },
        {
            url: '/produce/suspended-dubble-span',
            jpeg: '/image/engineering/suspended-single-span.jpg',
            avif: '/image/engineering/suspended-single-span.avif',
            name: 'Подвесной двухпролетный',
            price: '16 т'
        },
        {
            url: '/produce/gantry',
            jpeg: '/image/engineering/gantry.jpg',
            avif: '/image/engineering/gantry.avif',
            name: 'Козловой кран',
            price: '20 т'
        },
        {
            url: '/produce/mobile-transshipment',
            jpeg: '/image/engineering/mobile-transshipment.jpg',
            avif: '/image/engineering/mobile-transshipment.avif',
            name: 'Перегрузочное моб. устройство',
            price: '5 т'
        },
        {
            url: '/produce/trolleys-support',
            jpeg: '/image/engineering/trolleys-support.jpg',
            avif: '/image/engineering/trolleys-support.avif',
            name: 'Концевые балки к опорному крану',
            price: '50 т'
        },
        {
            url: '/produce/trolleys-suspension',
            jpeg: '/image/engineering/trolleys-suspension.jpg',
            avif: '/image/engineering/trolleys-suspension.avif',
            name: 'Концевые балки к подвесному крану',
            price: '10 т'
        }
    ]

</script>
<template>
    <AppEngineeringItem
        v-for="(item, index) in (props.limit ? items.slice(0, props.limit) : items)"
            :key="index"
            :url="item.url"
            :jpeg="item.jpeg"
            :avif="item.avif"
            :name="item.name"
            :price="item.price"
        />
</template>