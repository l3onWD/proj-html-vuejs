<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import CtaCard from '@/components/cta/CtaCard.vue';


export default {
    components: { CtaCard }

}
</script>


<template>
    <section>
        <CtaCard imgFile="main-banner-01.jpg" imgTitle="Jumbotron 01">

            <div class="container">

                <h3 class="tag mb-3">
                    <span>Upcoming</span>
                </h3>

                <h2 class="mb-5">Jumbotron 01</h2>

                <button class="btn btn-light">Shop Now</button>
            </div>

        </CtaCard>
    </section>
</template>