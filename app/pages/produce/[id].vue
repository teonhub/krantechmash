<script setup lang="ts">

    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useProduceStore } from '~/stores/produce'

    const baseUrl = 'https://ktmcranes.ru'
    const route = useRoute()
    const store = useProduceStore()
    const product = computed(() => {
        return store.cranes.find(item => item.url === route.params.id)
    })

    const productFields = [
        { key: 'load', label: 'Грузоподъемность (т)' },
        { key: 'length', label: 'Ширина пролет (м)' },
        { key: 'departure', label: 'Вылет стрелы (м)' },
        { key: 'drive', label: 'Тип привода' },
        { key: 'rotation', label: 'Способ управления поворотом консоли' },
        { key: 'hoist', label: 'Способ управления электрической талью' },
        { key: 'lifting', label: 'Высота подъема (м)' },
        { key: 'mode', label: 'Режим работы' },
        { key: 'climate', label: 'Климатическое исполнение (варианты по согласованному требованию)' },
        { key: 'execution', label: 'Исполнение' },
        { key: 'temperature', label: 'Температура эксплуатации крана' },
        { key: 'placement', label: 'Категория размещения крана' },
        { key: 'current', label: 'Электрический ток' },
        { key: 'trials', label: 'Масса испытательных грузов при статических испытаниях - при динамических испытаниях' },
        { key: 'speed', label: 'Скорость поворота стрелы крана (м/мин)' },
        { key: 'stability', label: 'Сейсмоустойчивость' },
        { key: 'management', label: 'Способ управления краном' },
        { key: 'motor', label: 'Мотор-редукторы крана' },
        { key: 'components', label: 'Электрокомпоненты в составе крана' },
        { key: 'class', label: 'Класс пожароопасности' },
        { key: 'typesection', label: 'Тип сечения' },
        { key: 'movements', label: 'Скорость передвижения (м/мин.)' },
        { key: 'options', label: 'Дополнительные опции' }
    ]

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: computed(() => product.value? `${product.value.name} | ПК «Крантехмаш»` : 'Товар не найден'),
        meta:
            [
                { name: 'description', content: computed(() => product.value?.seo_descrip) },
                { name: 'keywords', content: computed(() => product.value?.seo_keyword) },
                { property: 'og:title', content: computed(() => product.value?.name) },
                { property: 'og:description', content: computed(() => product.value?.seo_descrip) },
                { property: 'og:image', content: '' },
                { property: 'og:url', content: 'https://ktmcranes.ru'+`${route.path}` },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'ПК «Крантехмаш»' },
                { property: 'og:locale', content: 'ru_RU' }
            ]
        })

</script>

<template>
    <main>
        <AppLayoutHeading v-if="product" :title="product.name" />
            <div class="engineering-page">
                <div v-if="product" class="engineering-layout">
                    <div class="engineering-image">
                        <img :src="`/image/engineering/${product.image}`" :alt="product.name" />
                    </div>
                    <div class="table-layout">
                        <table class="specs-table">
                            <tbody>
                                <tr>
                                    <td colspan="2" class="heading-table">Характеристики продукции</td>
                                </tr>
                                <tr>
                                    <td>Параметры</td>
                                    <td>Значения</td>
                                </tr>
                                <template v-for="field in productFields" :key="field.key">
                                    <tr v-if="product[field.key as keyof typeof product]">
                                        <td>{{ field.label }}</td>
                                        <td>{{ product[field.key as keyof typeof product] }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div v-if="product.certificate" class="button-certificate">
                            <a :href="`/files/pdf/${product.certificate}`" target="_blank">Сертификат соответсвия PDF</a>
                        </div>
                        <div class="support">
                            <p>Узнать стоимость продукции можно по телефону или почте <a href="mailto:info@ktmcranes.ru">info@ktmcranes.ru</a> Рассчитаем цену по вашим параметрам. Мы работаем с 8:00 до 18:00, Пн. – Пт.</p>
                            <p><a href="tel:+79313787378" class="button-phone">Тел. +7 931 378 73 78</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <AppShorts />
        </main>
</template>

<style scoped>

.engineering-page {
    background-color: #fff;
    border-radius: 30px;
    margin-top: 1px;
    margin-bottom: 1px;
}

.engineering-layout {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
}

.engineering-image {
    box-sizing: border-box;
    padding: 30px;
    text-align: center;
}

.engineering-page .table-layout {
    box-sizing: border-box;
    margin: 35px 35px 60px 35px;
    /*
    border: 1px solid #eee;
    border-radius: 30px;
    padding: 25px;
    */
}

.engineering-page .table-layout table {
    width: 100%;
    border-collapse: collapse;
    font-family: "PT Mono", serif;
    font-size: 13px;
}

.engineering-page .table-layout table tr {
    height: 60px;
}

.engineering-page .table-layout table tr td {
    width: 50%;
    padding: 20px 15px;
    line-height: 20px;
}

.engineering-page .table-layout table tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.engineering-page .table-layout table tr td.heading-table {
    background-color: #e6d20f;
    color: #000;
}

.engineering-page .button-certificate a {
    display: flex;
    justify-content: space-between;
    width: 280px; height: 50px;
    margin-top: 50px;
    text-decoration: none;
    box-sizing: border-box;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
    background-color: #000;
    color: #fff;
    line-height: 49px;
    border-radius: 5px;
    padding: 0 40px 0 25px;
    font-size: 14px;
    font-family: "PT Mono", serif;
    padding-bottom: 5px;
    letter-spacing: -0.2px;
    transition: all 0.3s ease-in-out 0s;
}

.engineering-page .button-certificate a:hover {
    background-color: #1d55cd;
    transition: all 0.3s ease-in-out 0s;
}

.engineering-page .support {
    max-width: 500px;
    box-sizing: border-box;
    padding: 50px 0;
}

.engineering-page .support p {
    font-size: 15px;
    font-family: "PT Mono", serif;
    line-height: 24px;
    padding: 0;
    margin: 0;
}

.engineering-page .support a {
    color: #000;
    text-decoration: none;
}

.engineering-page .support a.button-phone {
    display: block;
    margin-top: 45px;
    font-size: 53px;
    font-family: 'Condens';
    text-decoration: none;
    color: #000;
}

.engineering-page .support p span {
    text-transform: lowercase;
}

@media (max-width: 575.98px) {
    .engineering-layout {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    /*
    .engineering-page {
        background: #000;
    }
    .engineering-image {
        padding: 0 40px 40px 40px;
    }
    .engineering-image img {
        border-radius: 15px;
    }
    .engineering-page .table-layout table tr:nth-child(odd) {
        background-color: #181818;
    }
    */

    .engineering-page .table-layout{
        margin: 0 20px 40px 20px;
    }
    .engineering-page .table-layout table {
        hyphens: auto;
        font-size: 13px;
    }
    .engineering-page .table-layout table tr td {
        padding: 20px 10px;
    }
    .button-certificate {
        padding: 0 30px;
    }
    .engineering-page .button-certificate a {
        width: 100%;
    }
    .engineering-page .support {
        padding: 30px;
    }
    .engineering-page .support p {
        font-size: 14px;
    }
    .engineering-page .support a.button-phone {
        font-size: 40px;
    }
}

</style>