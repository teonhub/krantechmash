<template>
    <div class="shorts-wrap">
        <div class="shorts-heading">
            <LayoutFigureBlack />
                <h3>Реальные видео реальной работы</h3>
            </div>
        <div class="shorts-inner">
            <div class="continue">
                <div class="continue-inner">
                    После монтажа оборудования не бросаем вас. Обеспечиваем сервисное обслуживание во время и после гарантийного срока.
                </div>
                <!--
                <div class="layout-btn">
                    <a class="btm-offer" href="#">
                        <div class="offer-inner">Оставить заявку</div>
                            <div class="icon-arrow">
                                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3319 10.4129H0" stroke="#ffffff" stroke-width="2"/>
                                    <path d="M10.4335 20.3071L20.3341 10.4061L10.6355 0.707092" stroke="#ffffff" stroke-width="2"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                -->
            </div>
        </div>
    </div>

    <div class="shorts-items">
        <div class="grid-4">
            <AppShortsItem
                video="/shorts/shorts-001.mp4"
                cover="/image/short/shorts-001.jpg"
                size="44.80"
            />
            <AppShortsItem
                video="/shorts/shorts-db-01.mp4"
                cover="/image/short/shorts-db-01.jpg"
                size="11.50"
            />
            <AppShortsItem
                video="/shorts/shorts-ob.mp4"
                cover="/image/short/shorts-ob.jpg"
                size="21.40" />
            <AppShortsItem
                video="/shorts/shorts-db-02.mp4"
                cover="/image/short/shorts-db-02.jpg"
                size="16.70"
            />
        </div>
    </div>
</template>