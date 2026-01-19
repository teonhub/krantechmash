<script setup>

    import { onMounted, onUpdated, onUnmounted, ref } from 'vue';
    import { Fancybox } from '@fancyapps/ui';

    const props = defineProps({
        options: {
            type: Object,
            default: () => ({}),
        },
    });

    const container = ref(null);

    onMounted(() => {
        Fancybox.bind(container.value, '[data-fancybox]', props.options);
    });

    onUpdated(() => {
        Fancybox.unbind(container.value);
        Fancybox.close();
        Fancybox.bind(container.value, '[data-fancybox]', props.options);
    });

    onUnmounted(() => {
        Fancybox.destroy();
    });

</script>

<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>

<style>

.fancybox__container{
    --fancybox-backdrop-bg: rgb(0 0 0 / 85%);
}

.f-button {
    background: rgb(0 0 0);
}

</style>