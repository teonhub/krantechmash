<script setup lang="ts">

    defineProps<{
        srcset: string,
        src: string,
        alt: string
    }>();
    
</script>

<template>
    <picture>
        <source :srcset="srcset" media="(max-width: 600px)" type="image/avif" />
        <img :src="src" :alt="alt" loading="lazy" />
    </picture>  
</template>