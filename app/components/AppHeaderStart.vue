<script setup>

    const { open } = useFeedback();

</script>

<template>
    <div class="layout-start">
        <button type="button" class="btn-start" @click="open" aria-label="Оставить заявку на консультацию">
            <div>Оставить заявку</div>
                <div class="icon-arrow">
                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3319 10.4129H0" stroke="#ffffff" stroke-width="2"/>
                        <path d="M10.4335 20.3071L20.3341 10.4061L10.6355 0.707092" stroke="#ffffff" stroke-width="2"/>
                    </svg>
                </div>
            </button>
        </div>    
</template>