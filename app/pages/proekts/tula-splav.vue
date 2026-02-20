<script setup lang="ts">

    const route = useRoute()
    const baseUrl = 'https://ktmcranes.ru'

    useHead({
        link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
        title: 'Проект: «НПО Сплав имени А.Н. Ганичева» - Кран консольный электрический',
        meta:
            [
                { name: 'description', content: 'Реализованные проекты ПК Крантехмаш' },
                { name: 'keywords', content: 'проекты крантехмаш' },
                { property: 'og:title', content: 'Проекты | ПК Крантехмаш' },
                { property: 'og:description', content: '' },
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
                <div class="proekt-local">
                    <div class="local-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff" viewBox="-5.0 -10.0 110.0 115.0">
                            <path d="m65.25 43.281c-1.0195 21.02-30.613 19.336-30.375 0-0.21484-19.445 29.387-20.914 30.375 0zm21.281 0c1.1562 31.062-36.031 50.469-36.531 49.969-1.125 0-37.406-18.562-36.531-49.969 0-13.051 6.9609-25.109 18.266-31.637 11.305-6.5273 25.227-6.5273 36.531 0 11.305 6.5273 18.266 18.586 18.266 31.637zm-15.031 0c-1.6562-29.625-42.852-27.367-42.875 0-0.14062 5.7227 2.0625 11.254 6.0977 15.312s9.5547 6.293 15.277 6.1875c5.6992-0.011719 11.16-2.2773 15.191-6.3086s6.2969-9.4922 6.3086-15.191z"/>
                        </svg>
                    </div>
                    <div>г.Тула</div>
                </div>
                <h1>«НПО Сплав имени А.Н. Ганичева»</h1>
                <div class="proekt-tech">
                    Кран консольный электрический: грузоподъёмность 0.5 тонн<br>Срок изготовления: 15 рабочих дней
                </div>
            </div>
            <div class="proekt-gallery">
                <GalleryItem
                    srcset="/files/proekt/tula-splav/02.avif"
                    src="/files/proekt/tula-splav/02.avif"
                    alt=""
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/03.avif"
                    src="/files/proekt/tula-splav/03.avif"
                    alt=""
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/04.avif"
                    src="/files/proekt/tula-splav/04.avif"
                    alt=""
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/05.avif"
                    src="/files/proekt/tula-splav/05.avif"
                    alt=""
                />
                <GalleryItem
                    srcset="/files/proekt/tula-splav/06.avif"
                    src="/files/proekt/tula-splav/06.avif"
                    alt=""
                />
                <div class="link-back">
                    <NuxtLink to="/proekts">&larr; Вернуться в проекты</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>