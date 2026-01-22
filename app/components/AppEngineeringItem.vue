<script setup lang="ts">

    defineProps<{
        url: string,
        image: string,
        name: string,
        price: string
    }>();
    
</script>

<template>
    <div class="engin-wrap">
        <NuxtLink :to="url">
            <picture>
                <source :srcset="image" media="(min-width: 600px)" />
                <img :src="image" alt="{{ name }}" />
            </picture>
            <div class="engin-name">{{ name }}</div>
            <div class="engin-price">До: {{ price }}</div>
            <div class="engin-more">
                <div>Подробнее</div>
                <div class="arrow-right">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M20.3319 10.4129H0" stroke="#ffffff" stroke-width="2"/>
                        <path d="M10.4335 20.3071L20.3341 10.4061L10.6355 0.707092" stroke="#ffffff" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>