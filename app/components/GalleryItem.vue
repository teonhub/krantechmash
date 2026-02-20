<script setup lang="ts">

    defineProps<{
        srcset: string,
        src: string,
        alt: string
    }>();
    
</script>

<template>
    <picture>
        <source :srcset="srcset" media="(min-width: 600px)" />
        <img :src="src" :alt="alt" />
    </picture>  
</template>