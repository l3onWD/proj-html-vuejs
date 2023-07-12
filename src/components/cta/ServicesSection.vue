<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import CtaButton from '@/components/cta/CtaButton.vue';


export default {
    components: { CtaButton }

}
</script>


<template>
    <section class="container py-5">

        <div class="row row-cols-4">

            <div class="col">
                <CtaButton iconClass="truck" text="Free Delivery" description="Free Shipping On All Order" />
            </div>

            <div class="col">
                <CtaButton iconClass="sack-dollar" text="Money Return" description="Back Guarantee in 7 days" />
            </div>

            <div class="col">
                <CtaButton iconClass="percent" text="Member Discount" description="On every order over €130.00" />
            </div>

            <div class="col">
                <CtaButton iconClass="hand-holding-dollar" text="Return Policy" description="Support 24 hours a day" />
            </div>
        </div>

    </section>
</template>