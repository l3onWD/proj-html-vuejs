<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import HeroCard from '@/components/promotions/HeroCard.vue';


export default {
    components: { HeroCard }

}
</script>


<template>
    <section>
        <HeroCard imgFile="cms-banner-03.jpg">
            <div class="container">
                <h3 class="tag mb-3">Upcoming</h3>
                <h2 class="mb-5">Jumbotron 01</h2>

                <button class="btn btn-light">Shop Now</button>
            </div>
        </HeroCard>
    </section>
</template>


<style></style>