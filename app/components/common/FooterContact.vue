<script setup lang="ts">

	interface Contact {
		name: string
		url:  string
	}

    const contacts: Contact [] = [
        { name: '+7 931 378 73 78',        url: 'tel:+79313787378' },
        { name: 'Написать в telegram',     url: 'https://t.me/krantehmash' },
        { name: 'Почта info@ktmcranes.ru', url: 'mailto:info@ktmcranes.ru' }
    ]

</script>
<template>
    <div class="footer-items">
        <ul>
            <li>Контакты</li>
            <li v-for="contact in contacts" :key="contact.name">
                <a :href="contact.url" rel="noopener noreferrer">
                    {{ contact.name }}
                </a>
            </li>
        </ul>
    </div>
</template>