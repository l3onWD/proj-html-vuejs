<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import CategoryCard from '@/components/categories/CategoryCard.vue';


export default {
    components: { CategoryCard }

}
</script>


<template>
    <section class="container py-5">

        <header>
            <h3 class="text-center mb-5">Special Category</h3>
        </header>

        <div class="row row-cols-3">
            <div class="col">
                <CategoryCard imgFile="category-image-01-446x550_t.jpg" name="Batman" />
            </div>
            <div class="col">
                <CategoryCard imgFile="category-image-02-446x550_t.jpg" name="Bayonetta" />
            </div>
            <div class="col">
                <CategoryCard imgFile="category-image-03-446x550_t.jpg" name="Dark Souls" />
            </div>
        </div>
    </section>
</template>


<style></style>