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
    <section class="container pt-3">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">

            <div class="col">
                <CtaButton iconClass="truck" text="Free Delivery" description="Free Shipping On All Order"
                    class="p-4 w-100" />
            </div>

            <div class="col">
                <CtaButton iconClass="sack-dollar" text="Money Return" description="Back Guarantee in 7 days"
                    class="p-4 w-100" />
            </div>

            <div class="col">
                <CtaButton iconClass="percent" text="Member Discount" description="On every order over €130.00"
                    class="p-4 w-100" />
            </div>

            <div class="col">
                <CtaButton iconClass="hand-holding-dollar" text="Return Policy" description="Support 24 hours a day"
                    class="p-4 w-100" />
            </div>
        </div>

    </section>
</template>