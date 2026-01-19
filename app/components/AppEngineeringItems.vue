<script setup lang="ts">

    import AppEngineeringItem from './AppEngineeringItem.vue'

    interface EngineeringItem {
        url: string
        image: string
        name: string
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
            image: '/image/engineering/konsole-electric.jpg',
            name: 'Консольный электрический',
            price: '5 т'
        },
        {
            url: '/produce/konsole-mech',
            image: '/image/engineering/konsole-mech.jpg',
            name: 'Консольный ручной',
            price: '5 т'
        },
        {
            url: '/produce/konsole-wall',
            image: '/image/engineering/konsole-wall.jpg',
            name: 'Консольный настенный',
            price: '250 кг'
        },
        {
            url: '/produce/single-girder',
            image: '/image/engineering/single-girder.jpg',
            name: 'Опорный однобалочный',
            price: '20 т'
        },
        {
            url: '/produce/dubble-girder',
            image: '/image/engineering/dubble-girder.jpg',
            name: 'Опорный двухбалочный',
            price: '20 т'
        },
        {
            url: '/produce/suspended-single-span',
            image: '/image/engineering/suspended-single-span.jpg',
            name: 'Подвесной однопролетный',
            price: '10 т'
        },
        {
            url: '/produce/suspended-dubble-span',
            image: '/image/engineering/suspended-dubble-span.jpg',
            name: 'Подвесной двухпролетный',
            price: '10 т'
        },
        {
            url: '/produce/gantry',
            image: '/image/engineering/gantry.jpg',
            name: 'Козловой кран',
            price: '20 т'
        },
        {
            url: '/produce/mobile-transshipment',
            image: '/image/engineering/mobile-transshipment.jpg',
            name: 'Перегрузочное устройство',
            price: '1 т'
        },
        {
            url: '/produce/trolleys-support',
            image: '/image/engineering/trolleys-support.jpg',
            name: 'Концевые балки к опорному крану',
            price: '50 т'
        },
        {
            url: '/produce/trolleys-suspension',
            image: '/image/engineering/trolleys-suspension.jpg',
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
        :image="item.image"
        :name="item.name"
        :price="item.price"
    />
</template>