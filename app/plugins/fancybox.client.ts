    
    import { defineNuxtPlugin } from '#app';
    import { Fancybox } from '@fancyapps/ui';

    export default defineNuxtPlugin((nuxtApp) => {
        nuxtApp.hook('app:mounted', () => {
            Fancybox.bind("[data-fancybox]", {
                Carousel: { infinite: false },
            });
        });

        nuxtApp.hook('app:beforeMount', () => {
            Fancybox.unbind("[data-fancybox]");
            Fancybox.close();
        });
    });