<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseCarousel from '@/components/base/BaseCarousel.vue';
import TestimonialCard from '@/components/testimonial/TestimonialCard.vue';

/*** DATA ***/
import { testimonialList } from '@/data/';


export default {
    components: { BaseCarousel, TestimonialCard },

    data() {
        return {
            testimonials: testimonialList
        };
    }

}
</script>


<template>
    <section class="py-5 text-center">

        <!-- Product Deals List -->
        <BaseCarousel :visible-slides="1" nav-dots>
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="col">
                <TestimonialCard v-bind="testimonial" />
            </div>
        </BaseCarousel>

    </section>
</template>


<style scoped>
section {
    background-image: url('../../assets/img/parallax.jpg');
    background-size: cover;
}
</style>