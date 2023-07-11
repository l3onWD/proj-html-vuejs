<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

/*** DATA ***/
import { productList } from '@/data/';

export default {
    components: { PageHeader, PageMain }


}
</script>


<template>
    <PageHeader />

    <PageMain />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>