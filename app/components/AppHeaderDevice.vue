<script setup>

    const { open } = useFeedback();

    import { ref } from 'vue'

    const isOpen = ref(false)

    const toggleMenu = () => {
        isOpen.value = !isOpen.value
    }

    const closeMenu = () => {
        isOpen.value = false
    }

</script>

<template>
    <header class="device-575">
        <div class="menu">
            <a href="#" @click.prevent="toggleMenu">Меню</a>
                <nav class="dropmdown" :class="{ 'open': isOpen }">
                    <ul>
                        <li><NuxtLink @click="closeMenu" to="/produce">Продукция</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/konsole-electric">Консольный электрический</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/konsole-mech">Консольный ручной</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/konsole-wall">Консольный настенный</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/single-girder">Опорный однобалочный</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/dubble-girder">Опорный двухбалочный</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/suspended-single-span">Подвесной однопролетный</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/suspended-dubble-span">Подвесной двухпролетный</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/gantry">Козловой кран</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/mobile-transshipment">Перегрузочное устройство</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/trolleys-support">Концевые балки к опорному крану</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/produce/trolleys-suspension">Концевые балки к подвесному крану</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/proekts">Проекты</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/vacancy">Вакансии</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/contact">Контакты</NuxtLink></li>
                    </ul>
                </nav>
            </div>
        <div class="logotype">
            <NuxtLink to="/">
                <svg width="60" height="16" viewBox="0 0 131 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.90086e-06 3.8147e-06H16.848V33.6H5.90086e-06V3.8147e-06ZM16.848 16.752L24.72 3.8147e-06H41.472L33.072 16.752L43.728 33.6H26.784L16.848 16.752ZM56.6318 2.832H44.0078V3.8147e-06H86.1038V2.832H73.4318V33.6H56.6318V2.832ZM91.2851 11.232V33.6H88.4531V3.8147e-06H102.469L109.477 14.016L115.045 3.8147e-06H130.405V33.6H115.045V8.4L105.253 33.6H101.077L91.2851 11.232Z" fill="#ffffff"/>
                </svg>
            </NuxtLink>
        </div>
        <div class="btn-start">
            <button type="button" @click="open">Заявка</button>
        </div>
    </header>
</template>