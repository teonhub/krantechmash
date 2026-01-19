<template>
    <div class="engineering">
        <div class="engineering-heading">
            <LayoutFigureWhite />
                <h2>Создаем готовые решения</h2>
            </div>
            <div class="grid-4">
                <AppEngineeringItems :limit="7" />
                <AppEngineeringLast />
            </div>
        </div>
</template>