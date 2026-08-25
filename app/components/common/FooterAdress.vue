<script setup lang="ts">

	interface Address {
		name: string
		url:  string
	}

    const address: Address [] = [
        { name: 'г. Орёл, ул. Кромское шоссе, д. 8',  url: 'https://yandex.ru/maps/-/CLd7eKIp' },
        { name: 'Открыть в Яндекс.Картах',            url: 'https://yandex.ru/maps/-/CLd7eKIp' }
    ]

</script>
<template>
    <div class="footer-items">
        <ul>
            <li>Адрес</li>
            <li v-for="addres in address" :key="addres.name">
                <a :href="addres.url" target="_blank" rel="noopener noreferrer">
                    {{ addres.name }}
                </a>
            </li>
        </ul>
    </div>
</template>