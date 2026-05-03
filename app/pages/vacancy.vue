<script setup lang="ts">

    import { ref } from 'vue'
    const isButtonDisabled = ref(true)

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Вакансии в ПК Крантехмаш: работа на производстве',
        meta:
            [
                { name: 'description', content: 'Открыты вакансии в ПК Крантехмаш. Мы предлагаем стабильную работу, конкурентную зарплату и возможности для профессионального роста. Узнайте о текущих вакансиях и условиях трудоустройства на нашем сайте' },
                { name: 'keywords', content: '' },
                { property: 'og:title', content: 'Вакансии в ПК Крантехмаш' },
                { property: 'og:description', content: 'Открыты вакансии в ПК Крантехмаш. Мы предлагаем стабильную работу, конкурентную зарплату и возможности для профессионального роста. Узнайте о текущих вакансиях и условиях трудоустройства на нашем сайте' },
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
        <AppLayoutHeading title="Вакансии" />
        <div class="content-page">
            <div class="grid-3">
                <div class="vacans-layout">
                    <h2>Слесарь</h2>
                    <ul>
                        <li>- от 90 000 до 110 000 ₽ за месяц</li>
                        <li>- оформление в соответствие с ТК</li>
                        <li>- оплачиваемые переработки</li>
                    </ul>
                    <ul class="conditions">
                        <li>Выплаты: раз в месяц</li>
                        <li>Опыт работы: 1–3 года</li>
                        <li>Занятость: полная</li>
                        <li>Оформление: трудовой договор</li>
                        <li>График: 5/2</li>
                        <li>Рабочие часы: 8</li>
                    </ul>
                    <button type="button" class="btn-vacans" :disabled="isButtonDisabled">Откликнуться</button>            
                </div>
                <div class="vacans-layout">
                    <h2>Сварщик-сборщик</h2>
                    <ul>
                        <li>- от 100 000 до 150 000 ₽ за месяц</li>
                        <li>- оформление в соответствие с ТК</li>
                        <li>- оплачиваемые переработки</li>
                    </ul>
                    <ul class="conditions">
                        <li>Выплаты: раз в месяц</li>
                        <li>Опыт работы: 1–3 года</li>
                        <li>Занятость: полная</li>
                        <li>Оформление: трудовой договор</li>
                        <li>График: 5/2</li>
                        <li>Рабочие часы: 8</li>
                    </ul>
                    <button type="button" class="btn-vacans" :disabled="isButtonDisabled">Откликнуться</button>               
                </div>
                <div class="vacans-layout">
                    <h2>Оператор - наладчик станков ЧПУ</h2>
                    <ul>
                        <li>- от 100 000 до 150 000 ₽ за месяц</li>
                        <li>- оформление в соответствие с ТК</li>
                        <li>- оплачиваемые переработки</li>
                    </ul>
                    <ul class="conditions">
                        <li>Выплаты: раз в месяц</li>
                        <li>Опыт работы: 1–3 года</li>
                        <li>Занятость: полная</li>
                        <li>Оформление: трудовой договор</li>
                        <li>График: 5/2</li>
                        <li>Рабочие часы: 8</li>
                    </ul>
                    <button type="button" class="btn-vacans" :disabled="isButtonDisabled">Откликнуться</button>              
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.vacans-layout{
    box-sizing: border-box;
    padding: 25px;
}

.vacans-layout h2{
    font-family: 'Condens';
    text-transform: uppercase;
    font-size: 48px;
    line-height: 48px;
    font-weight: 100;
    margin-bottom: 30px;
}

.vacans-layout ul{
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    letter-spacing: -.3px;
    margin-bottom: 30px;
}

.vacans-layout ul.conditions li{
    color: #000;
    list-style: inside;
    padding-left: 5px;
}

.vacans-layout ul li{
    font-size: 15px;
    line-height: 27px;
}

.vacans-layout button.btn-vacans{
    display: flex;
    justify-content: space-between;
    width: 320px;
    height: 56px;
    margin-top: 50px;
    text-decoration: none;
    box-sizing: border-box;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
    background-color: #000;
    color: #fff;
    line-height: 55px;
    border-radius: 5px;
    padding: 0 40px 0 25px;
    font-size: 14px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    letter-spacing: -.3px;
    padding-bottom: 5px;
    transition: all 0.3s ease-in-out 0s;
}

.vacans-layout button.btn-vacans:disabled{
    opacity: 0.9;
    cursor: not-allowed;
    color: #c5c5c5;
}

@media (max-width: 575.98px) {
    main .grid-3{
        grid-template-columns: 1fr;
        gap: 0;
    }
    .vacans-layout{
        padding: 0;
        margin-bottom: 80px;
    }
    .vacans-layout ul li,
    .vacans-layout ul.conditions li{
        color: #fff;
    }
    .vacans-layout button.btn-vacans{
        background: #252525;
        width: 100%;
    }
    .vacans-layout button.btn-vacans:disabled{
        color: #858585;
    }
}

</style>