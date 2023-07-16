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

            <CtaCard imgFile="main-banner-01.jpg" imgTitle="Jumbotron 01" class="col">

                <div class="container">

                    <h3 class="tag mb-3">
                        <span>Upcoming</span>
                    </h3>

                    <h2 class="mb-5">Jumbotron 01</h2>

                    <button class="btn btn-light">Shop Now</button>
                </div>

            </CtaCard>

            <CtaCard imgFile="main-banner-02.jpg" imgTitle="Jumbotron 02" class="col">

                <div class="container">

                    <h3 class="tag mb-3">
                        <span>Upcoming</span>
                    </h3>

                    <h2 class="mb-5">Jumbotron 02</h2>

                    <button class="btn btn-light">Shop Now</button>
                </div>

            </CtaCard>

        </BaseCarousel>
    </section>
</template>