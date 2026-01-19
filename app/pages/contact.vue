<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'ПК «Крантехмаш»',
        meta:
            [
                { name: 'description', content: '' },
                { name: 'keywords', content: '' },
                { property: 'og:title', content: '' },
                { property: 'og:description', content: '' },
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
        <AppLayoutHeading title="Контактная информация" />
            <div class="content-page">
                <div class="contact-items">
                    <div class="contact-cell">
                        <div class="contact-header">Адрес</div>
                        <div class="contact-content">302042 г. Орёл Кромское шоссе 8</div>
                    </div>
                    <div class="contact-cell">
                        <div class="contact-header">Телефон</div>
                        <div class="contact-content"><a href="tel:+79313787378">+7 931 378 73 78</a></div>
                    </div>
                    <div class="contact-cell">
                        <div class="contact-header">Почта</div>
                        <div class="contact-content">info@ktmcranes.ru</div>
                    </div>
                    <div class="contact-cell">
                        <div class="contact-header">График работы</div>
                        <div class="contact-content">8:00 - 18:00 : Пн. – Пт., без перерыва</div>
                    </div>
                    <div class="contact-cell">
                        <div class="contact-header">Мессенджер</div>
                        <div class="contact-content"><a href="https://t.me/krantehmash" target="_blank">Telegram | @krantehmash</a></div>
                    </div>
                    <div class="contact-cell">
                        <div class="contact-header">ОГРН / ИНН</div>
                        <div class="contact-content">1195749007453, 5752082320</div>
                    </div>
                </div>

                <div class="contact-map">
                    <div class="map-header">
                        <h2>Схема проезда</h2>
                    </div>
                        <div class="map-content map-locked">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0df82c37772fa2fb130855464ac0016783a473089aad77c18418e156ff132cff&amp;source=constructor"
                                width="100%"
                                height="700"
                                frameborder="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </main>
</template>