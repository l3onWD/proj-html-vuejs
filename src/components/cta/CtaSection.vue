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

        <div class="row row-cols-2">

            <div v-for="cta in filterdCta" :key="cta.title" class="col">
                <CtaCard :imgFile="cta.imgFile" :imgTitle="cta.title">
                    <div class="w-50 ms-auto pe-3">
                        <h5 class="tag">{{ cta.tag }}</h5>
                        <h3>{{ cta.title }}</h3>
                    </div>
                </CtaCard>
            </div>

        </div>

    </section>
</template>