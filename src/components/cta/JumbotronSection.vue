<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import CtaCard from '@/components/cta/CtaCard.vue';
import BaseCarousel from '@/components/base/BaseCarousel.vue';


export default {
    components: { CtaCard, BaseCarousel }

}
</script>


<template>
    <section>

        <BaseCarousel :responsive="{ 'xs': 1 }" :total-items="2" nav-dots infinite :autoplay="5000">

            <CtaCard imgFile="main-banner-01.jpg" imgTitle="Jumbotron 01">

                <div class="container">

                    <h5 class="tag mb-3">
                        <span>Upcoming</span>
                    </h5>

                    <h3 class="mb-4 mb-md-5">Jumbotron 01</h3>

                    <button class="btn btn-light">Shop Now</button>
                </div>

            </CtaCard>

            <CtaCard imgFile="main-banner-02.jpg" imgTitle="Jumbotron 02">

                <div class="container">

                    <h5 class="tag mb-3">
                        <span>Upcoming</span>
                    </h5>

                    <h3 class="mb-4 mb-md-5">Jumbotron 02</h3>

                    <button class="btn btn-light">Shop Now</button>
                </div>

            </CtaCard>

        </BaseCarousel>
    </section>
</template>

<style scoped>
section>* {
    height: 400px;
}

/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA MD ***/
@media screen and (min-width: 768px) {
    section>* {
        height: 500px;
    }

    h5 {
        font-size: 2rem;
    }

    h3 {
        font-size: 3.5rem;
    }
}
</style>