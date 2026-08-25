<script setup lang="ts">

	interface Time {
		name: string
	}

    const times: Time [] = [
        { name: 'График работы' },
        { name: '8:00 - 18:00 : Пн. – Пт.' },
        { name: 'Без перерыва' }
    ]

</script>
<template>
    <div class="footer-items">
        <ul>
            <li v-for="time in times" :key="time.name">{{ time.name }}</li>
        </ul>
    </div>
</template>