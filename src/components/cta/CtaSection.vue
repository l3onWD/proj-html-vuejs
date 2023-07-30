<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import CtaCard from '@/components/cta/CtaCard.vue';

/*** DATA ***/
import { ctaList } from '@/data/';


export default {
    components: { CtaCard },

    data() {
        return {
            ctaList: ctaList
        };
    },

    props: {
        ctaType: String
    },

    computed: {
        filterdCta() {
            return ctaList.filter(({ type }) => this.ctaType === type);
        }
    }

}
</script>


<template>
    <section class="container py-5">

        <div class="row g-4 row-cols-1 row-cols-md-2">

            <div v-for="cta in filterdCta" :key="cta.title" class="col">
                <CtaCard :imgFile="cta.imgFile" :imgTitle="cta.title">
                    <div class="w-50 ms-auto pe-3">
                        <h5 class="tag">
                            <span>{{ cta.tag }}</span>
                        </h5>
                        <h4>{{ cta.title }}</h4>
                    </div>
                </CtaCard>
            </div>

        </div>

    </section>
</template>

<style scoped>
/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA LG ***/
@media screen and (min-width: 992px) {
    h4 {
        font-size: 2rem;
    }
}
</style>