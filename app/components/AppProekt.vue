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
                url="/proekts/baskunchak-russol"
                image="/files/proekt/baskunchak-russol/01.avif"
                name="г.н.Баскунчак, «Руссоль»"
            />
            <AppProektItem 
                url="/proekts/kulebaki-ruspolimet"
                image="/files/proekt/kulebaki-ruspolimet/01.avif"
                name="г.Кулебаки, «Русполимет»"
            />
            <AppProektItem 
                url="/proekts/moscow-vodokanal"
                image="/files/proekt/moscow-vodokanal/01.avif"
                name="г.Москва, «Мосводоканал»"
            />
        </div>
        <div class="proekt-footer">
            <NuxtLink to="/proekts">Смотреть еще</NuxtLink>
        </div>
    </div>
</template>