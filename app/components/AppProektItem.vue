<script setup lang="ts">

    defineProps<{
        url: string,
        image: string,
        name: string
    }>();
 
</script>
<template>
    <div class="proekt">
        <NuxtLink :to="url" class="picture-layout">
            <picture>
                <source :srcset="image" media="(min-width: 600px)" />
                <img :src="image" alt="{{ name }}" loading="lazy" />
            </picture>
            <div class="icon-name">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff" viewBox="-5.0 -10.0 110.0 135.0">
                    <path d="m65.25 43.281c-1.0195 21.02-30.613 19.336-30.375 0-0.21484-19.445 29.387-20.914 30.375 0zm21.281 0c1.1562 31.062-36.031 50.469-36.531 49.969-1.125 0-37.406-18.562-36.531-49.969 0-13.051 6.9609-25.109 18.266-31.637 11.305-6.5273 25.227-6.5273 36.531 0 11.305 6.5273 18.266 18.586 18.266 31.637zm-15.031 0c-1.6562-29.625-42.852-27.367-42.875 0-0.14062 5.7227 2.0625 11.254 6.0977 15.312s9.5547 6.293 15.277 6.1875c5.6992-0.011719 11.16-2.2773 15.191-6.3086s6.2969-9.4922 6.3086-15.191z"/>
                </svg>
            </div>
            <div class="proek-name">
                <span>{{ name }}</span>
            </div>
        </NuxtLink>

        <div class="layout-btn">
            <NuxtLink :to="url" class="btn-mode">
                <div>Подробнее</div>
                    <div class="arrow-right">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3319 10.4129H0" stroke="#ffffff" stroke-width="2"/>
                            <path d="M10.4335 20.3071L20.3341 10.4061L10.6355 0.707092" stroke="#ffffff" stroke-width="2"/>
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
</template>