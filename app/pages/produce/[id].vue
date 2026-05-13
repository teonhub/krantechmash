<script setup lang="ts">

    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useProduceStore } from '~/stores/produce'
    import { ref, watch } from 'vue'

    const baseUrl = 'https://ktmcranes.ru'
    const route = useRoute()
    const store = useProduceStore()
    const currentImage = ref('')
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
        { key: 'climate', label: 'Климатическое исполнение' },
        { key: 'execution', label: 'Исполнение' },
        { key: 'temperature', label: 'Температура эксплуатации крана' },
        { key: 'placement', label: 'Категория размещения крана' },
        { key: 'current', label: 'Электрический ток' },
        { key: 'trials', label: 'Масса испытательных грузов' },
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
        title: computed(() => product.value? `${product.value.name} | ПК Крантехмаш` : 'Товар не найден'),
        meta: [
            { name: 'description', content: computed(() => product.value?.seo_descrip) },
            { name: 'keywords', content: computed(() => product.value?.seo_keyword) },
            { property: 'og:title', content: computed(() => product.value?.name) },
            { property: 'og:description', content: computed(() => product.value?.seo_descrip) },
            { property: 'og:image', content: '/image/short/shorts-001.jpg' },
            { property: 'og:url', content: 'https://ktmcranes.ru'+`${route.path}` },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'ПК Крантехмаш' },
            { property: 'og:locale', content: 'ru_RU' }
        ]
    })

    watch(product, (newProduct) => {
        if (newProduct) {
                currentImage.value = newProduct.image_a
            }
        }, { immediate: true })

    const changeImage = (img: string) => {
        currentImage.value = img
    }

</script>

<template>
    <main>
        <AppLayoutHeading v-if="product" :title="product.name" />
            <div class="engineering-page">
                <div v-if="product">
                    <div class="engineering-layout">
                        <div class="engineering-image">
                            <transition name="fade" mode="out-in">
                                <img class="main-image"
                                    :key="currentImage"
                                    :src="`/image/engineering/${currentImage}`"
                                    :alt="product.name"
                                />
                            </transition>
                            <div class="image-control">
                                <img
                                    :src="`/image/engineering/${product.image_a}`"
                                    :alt="product.name"
                                    @click="changeImage(product.image_a)"
                                />
                                <img
                                    :src="`/image/engineering/${product.image_b}`"
                                    :alt="product.name"
                                    @click="changeImage(product.image_b)"
                                />
                            </div>
                        </div>
                        <div class="product-card-wrapper">
                            <div class="add-btns">
                                <div class="add-btn">
                                    <NuxtLink to="/proekts">
                                        <span>Реализованные проекты</span>
                                    </NuxtLink>
                                </div>
                                <div class="add-btn" v-if="product.certificate">
                                    <a :href="`/files/pdf/${product.certificate}`" target="_blank">
                                        <span>Сертификат PDF</span>
                                    </a>
                                </div>
                                <div class="add-btn">
                                    <NuxtLink to="/produce">
                                        <span>Вся продукция</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        <div class="table-layout">
                            <template v-for="field in productFields" :key="field.key">
                                <div class="product-card-parameters" v-if="product[field.key as keyof typeof product]">
                                    <div class="product-card-parameter -heading">{{ field.label }}</div>
                                    <div class="product-card-parameter">{{ product[field.key as keyof typeof product] }}</div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="product-inner">
                    <div class="product-content" v-html="product.feature"></div>
                    <div class="product-content" v-html="product.kit"></div>
                </div>
            </div>
            <div v-else>
                <div class="not-found">
                    <h1>Товар не найден</h1>
                    <p><NuxtLink to="/produce">вернуться в каталог</NuxtLink></p>
                </div>
            </div>
        </div>
    <AppShorts />
    </main>
</template>

<style scoped>

.engineering-page {
    background-color: #000;
    border-radius: 30px;
    margin-top: 1px;
}

.engineering-layout {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    border-radius: 30px;
    background-color: #fff;
    margin-bottom: 1px;
}

.engineering-layout .engineering-image {
    box-sizing: border-box;
    padding: 30px;
    text-align: center;
}

.engineering-layout .engineering-image img {
    max-width: 520px;
}

.engineering-layout .product-card-wrapper {
    box-sizing: border-box;
    padding: 60px 30px 60px 0;
}

.engineering-layout .table-layout {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    /*
    border: 1px solid #eee;
    border-radius: 30px;
    padding: 25px;
    */
}

.engineering-layout .table-layout .product-card-parameters {
    font-size: 15px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    letter-spacing: -.3px;
    line-height: 22px;
    border: 1px dashed #ddd;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 3px;
}

.engineering-layout .table-layout .product-card-parameter.-heading {
    font-weight: 600;
}

.engineering-layout .table-layout .product-card-parameter {
    font-weight: 400;
}

.engineering-layout .add-btns{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.engineering-layout .add-btns .add-btn a{
    display: inline-block;
    margin-bottom: 30px;
    margin-right: 35px;
    text-decoration: none;
    border-bottom: 1px solid #5d5d5d;
    color: #000;
    font-size: 15px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    letter-spacing: -.3px;
    padding-bottom: 2px;
    transition: all 0.3s ease-in-out 0s;
}

.engineering-layout .add-btns .add-btn a:hover {
    color: #276bfb;
    border-bottom: 1px solid #276bfb;
    transition: all 0.3s ease-in-out 0s;
}

.engineering-layout .support {
    max-width: 500px;
    box-sizing: border-box;
    padding: 50px 0;
}

.engineering-layout .not-found {
    text-align: center;
    padding: 90px 40px;
}

.engineering-layout .not-found h1 {
    padding: 0px 0 10px 0;
    font-family: 'Condens';
    text-transform: uppercase;
    font-size: 92px;
    font-weight: 100;
    text-align: center;
}

.engineering-layout .not-found a {
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #bbbbbb;
    padding-bottom: 2px;
    font-family: "PT Mono", serif;
    font-size: 15px;
    color: #000;
}

.product-inner {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
}

.engineering-layout .image-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.engineering-layout .image-control img {
    display: block;
    width: 120px;
    height: 120px;
    box-sizing: border-box;
    padding: 10px;
    cursor:pointer;
    border: 1px solid #ebebeb;
    transition:0.3s;
    object-fit: cover;
}

.engineering-layout .image-control img:hover {
    border-color: #000;
}

.engineering-layout .fade-enter-active,
.engineering-layout .fade-leave-active {
    transition: opacity 0.35s ease;
}

.engineering-layout .fade-enter-from,
.engineering-layout .fade-leave-to {
    opacity: 0;
}

.engineering-layout .fade-enter-to,
.engineering-layout .fade-leave-from {
    opacity: 1;
}

@media (max-width: 575.98px) {
    .engineering-layout {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
    .product-inner {
        grid-template-columns: 1fr;
    }
    .engineering-layout .table-layout {
        margin: 0 40px 45px 40px;
        grid-template-columns: 1fr;
    }
    .engineering-layout .engineering-image img {
        max-width: 100%;
    }
    .engineering-layout .image-control {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .engineering-layout .image-control img {
        width: 80px;
        height: 80px;
    }
    .engineering-layout .product-card-wrapper {
        padding: 0;
    }
    .engineering-layout .table-layout .product-card-parameters {
        font-size: 14px;
    }
    .engineering-layout .add-btns{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 40px;
        margin-bottom: 30px;
    }
    .engineering-layout .add-btns .add-btn a{
        margin-bottom: 10px;
        font-size: 14px;
    }
    .engineering-layout .button-certificate {
        text-align: center;
    }
    .engineering-layout .button-certificate a {
        margin-top: 0;
        margin-bottom: 60px;
    }
    .engineering-layout .support {
        padding: 30px 20px 15px 20px;
    }
    .engineering-layout .support p {
        font-size: 14px;
    }
    .engineering-layout .support a.button-phone {
        font-size: 40px;
    }
    .engineering-layout .not-found h1 {
        font-size: 52px;
        padding: 40px 0 0 0;
    }
}

</style>