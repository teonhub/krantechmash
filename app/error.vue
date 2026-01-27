<script setup>

    const props = defineProps({
        error: Object
    })

    const handleError = () => clearError({ redirect: '/' })

</script>

<template>
    <AppHeader />
        <div class="error-page">
            <div v-if="error.statusCode === 404">
                <h1>Ошибка 404<br>Страница не найдена</h1>
                <p>К сожалению, такой страницы не существует.</p>
                <p><img src="/files/image/official/404.jpg" class="img-404"></p>
            </div>
            <div v-else>
                <h1>Произошла ошибка</h1>
                <p>{{ error.message }}</p>
            </div>
            <NuxtLink class="btn-back" to="/" @click="handleError">Вернуться на главную</NuxtLink>
        </div>
    <AppFooter />
    <AppRequest />
</template>

<style scoped>

.error-page {
    border-radius: 30px;
    box-sizing: border-box;
    padding: 40px;
    background-color: #fff;
    text-align: center;
}

.error-page p {
    text-align: center;
    font-family: "PT Mono", serif;
    font-size: 15px;
    padding: 20px 0;
}

.img-404 {
    max-width: 600px;
    padding: 0;
    border-radius: 15px;
}

.error-page h1 {
    margin-top: 30px;
    font-family: 'Condens';
    text-transform: uppercase;
    font-weight: 100;
    font-size: 72px;
    line-height: 72px;
}

.error-page a.btn-back {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    border-bottom: 1px solid #bbbbbb;
    padding-bottom: 2px;

    font-family: "PT Mono", serif;
    font-size: 15px;
    color: #000;
}

@media (max-width: 575.98px) {
    .error-page {
        background-color: #000;
    }
    .error-page h1 {
        margin-top: 70px;
        font-family: 'Condens';
        text-transform: uppercase;
        font-size: 52px;
        line-height: 52px;
        color: #fff;
    }
    .img-404 {
        max-width: 100%;
        padding: 0;
        border-radius: 0;
    }
    .error-page p {
        color: #fff;
        line-height: 24px;
    }
    .error-page a.btn-back {
        color: #fff;
        border-bottom: 1px solid #3d3d3d;
    }
}

</style>