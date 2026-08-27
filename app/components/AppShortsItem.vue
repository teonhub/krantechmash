<script setup lang="ts">

    defineProps<{
        shortfile:  string,
        imgavif:    string,
        imgjpeg:    string,
        sizefile:   string,
        altcontent: string
    }>();

</script>
<template>
    <div class="short">
        <div class="short-inner">
            <ClientOnly>
                <Fancybox :options="{Carousel: {infinite: false,}}">
                    <a class="btm-play" :href="shortfile" data-fancybox="gallery" aria-label="Открыть видео">
                        <picture>
                            <source :srcset="imgavif" type="image/avif" />
                            <source :srcset="imgjpeg" type="image/jpeg" />
                            <img
                                :src="imgavif"
                                :alt="altcontent" loading="lazy"
                            />
                        </picture>
                        <div class="icon-play">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" aria-hidden="true" focusable="false">
                                    <path d="m50.051 13c-20.461 0-37.051 16.59-37.051 37.051 0 20.461 16.59 37.047 37.051 37.047 20.461 0 37.051-16.586 37.051-37.047 0-20.461-16.59-37.051-37.051-37.051zm-8.1562 23.223 20.316 13.828-20.316 13.828z" fill="#ffffff"/>
                                </svg>
                            </div>
                        <div class="media-size">
                            <span>{{ sizefile }} mb</span>
                        </div> 
                    </a>
                </Fancybox>
            </ClientOnly>
        </div>  
    </div>    
</template>