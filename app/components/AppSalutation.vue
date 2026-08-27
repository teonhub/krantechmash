<template>
    <div class="salutation">
        <div class="inner-left">
            <div class="heading">
                <div class="paragrah-large">Завод-изготовитель грузоподъемного оборудования</div>
                <div class="paragrah-small">Полный цикл от проектирования до ввода в эксплуатацию. Гарантия на оборудование до&nbsp;2&nbsp;лет.</div>
            </div>
            <div class="layout-proekt">
                <NuxtLink to="/proekts" class="btm-proekt">
                    <div>Реализованные проекты</div>
                        <div class="icon-arrow">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3319 10.4129H0" stroke="#ffffff" stroke-width="2"/>
                                <path d="M10.4335 20.3071L20.3341 10.4061L10.6355 0.707092" stroke="#ffffff" stroke-width="2"/>
                            </svg>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        
            <div class="inner-center">
                <div class="video-wrapper">
                    <video
                        autoplay muted loop playsinline
                        preload="auto"
                        disablepictureinpicture
                        controlslist="nodownload noplaybackrate nofullscreen noremoteplayback"
                        poster="/assets/media/salutation.avif">
                        <source src="/assets/media/salutation.av1.mp4"  type="video/mp4; codecs=av1" />
                        <source src="/assets/media/salutation.h264.mp4" type="video/mp4" />
                    </video>
                        <h1>Крантехмаш</h1>
                            <div class="icon-lines">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 90 112.5" x="0px" y="0px">
                                    <polygon points="0 6.511 6.511 0 3.749 0 0 3.749 0 6.511"/><polygon points="0 16.501 16.501 0 13.739 0 0 13.739 0 16.501"/><polygon points="0 26.491 26.491 0 23.729 0 0 23.729 0 26.491"/><polygon points="0 36.481 36.481 0 33.719 0 0 33.719 0 36.481"/><polygon points="63.689 0 0 63.689 0 66.451 66.451 0 63.689 0"/><polygon points="73.679 0 0 73.679 0 76.441 76.441 0 73.679 0"/><polygon points="83.669 0 0 83.669 0 86.431 86.431 0 83.669 0"/><polygon points="90 3.659 3.659 90 6.421 90 90 6.421 90 3.659"/><polygon points="90 13.649 13.649 90 16.411 90 90 16.411 90 13.649"/><polygon points="90 23.639 23.639 90 26.401 90 90 26.401 90 23.639"/><polygon points="90 33.629 33.629 90 36.391 90 90 36.391 90 33.629"/><polygon points="90 43.619 43.619 90 46.381 90 90 46.381 90 43.619"/><polygon points="90 53.609 53.609 90 56.371 90 90 56.371 90 53.609"/><polygon points="90 63.599 63.599 90 66.361 90 90 66.361 90 63.599"/><polygon points="90 73.589 73.589 90 76.351 90 90 76.351 90 73.589"/><polygon points="90 83.579 83.579 90 86.341 90 90 86.341 90 83.579"/><polygon points="43.709 0 0 43.709 0 46.471 46.471 0 43.709 0"/><polygon points="53.699 0 0 53.699 0 56.461 56.461 0 53.699 0"/>
                                </svg>
                            </div>
                        </div>
                    </div>
            <div class="inner-right">
                <div class="layout-phone">
                    Телефон <a href="tel:+79313787378">+7 931 378 73 78</a>
                </div>
                <div class="arrow-down">
                    <svg width="72" height="72" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3319 10.4129H0" stroke="#3C3C3C" stroke-width="2"/>
                        <path d="M10.4335 20.3071L20.3341 10.4061L10.6355 0.707092" stroke="#3C3C3C" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div> 
</template>