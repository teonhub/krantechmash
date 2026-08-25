<script setup lang="ts">

	interface Agreement {
		name: string
		url:  string
	}

    const agreements: Agreement [] = [
        { name: 'Пользовательское соглашение',         url: '/agreement' },
        { name: 'Правила использование файлов-cookie', url: '/cookie' }
    ]

</script>
<template>
    <div class="footer-items">
        <ul>
            <li>Адрес</li>
            <li v-for="agreement in agreements" :key="agreement.name">
                <NuxtLink :to="agreement.url">{{ agreement.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>