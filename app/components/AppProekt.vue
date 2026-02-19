<template>
    <div class="proekt-wrap">
        <div class="proekt-heading">
            <LayoutFigureBlack />
                <h2>Реализованные проекты</h2>
            </div>
        <div class="grid-4">
            <AppProektItem 
                url="/proekts/medvedeva"
                image="/files/proekt/orel-medvd/01.avif"
                name="г.Орёл, Завод им.Медведева"
            />
            <AppProektItem 
                url="/proekts/kolomna-vpk"
                image="/files/proekt/kolomna-vpk/01.avif"
                name="г.Коломна, ВПК"
            />
            <AppProektItem 
                url="/proekts/kolomna-vpk-odnobalochniy"
                image="/files/proekt/kolomna-vpk-odnobalochniy/01.avif"
                name="г.Коломна, ВПК"
            />
            <AppProektItem 
                url="/proekts/moscow-vodokanal"
                image="/files/proekt/moscow-vodokanal/01.avif"
                name="г.Москва, АО «Мосводоканал»"
            />
        </div>
        <div class="proekt-footer">
            <NuxtLink to="/proekts">Смотреть еще</NuxtLink>
        </div>
    </div>
</template>