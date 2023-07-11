<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProductSection from '@/components/products/ProductSection.vue';
import ProductDealsSection from '@/components/products/ProductDealsSection.vue';
import BlogCard from '@/components/blog/BlogCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BlogCard, ProductSection, ProductDealsSection },

    data() {
        return {
            store
        };
    },

    emits: ['products-filter-changed']


}
</script>


<template>
    <main>

        <!-- Jumbotron -->
        <section class="bg-danger vh-100 d-flex">
            <h2 class="m-auto">jumbotron</h2>
        </section>


        <!-- Services -->
        <section class="bg-success container py-5">

            <div class="row row-cols-4">
                <div class="col">
                    Service Card
                </div>
                <div class="col">
                    Service Card
                </div>
                <div class="col">
                    Service Card
                </div>
                <div class="col">
                    Service Card
                </div>
            </div>

        </section>


        <!-- Featured -->
        <section class="bg-danger container py-5">
            <div class="row row-cols-2">
                <div class="col">
                    Jumbo Card
                </div>
                <div class="col">
                    Jumbo Card
                </div>
            </div>
        </section>


        <!-- Categories -->
        <section class="bg-success container py-5">
            <div class="row row-cols-3">
                <div class="col">
                    Category Card
                </div>
                <div class="col">
                    Category Card
                </div>
                <div class="col">
                    Category Card
                </div>
            </div>
        </section>


        <!-- Products -->
        <ProductSection @products-filter-changed="$emit('products-filter-changed')" />


        <!-- Offers -->
        <section class="bg-success container py-5">
            <div class="row row-cols-2">
                <div class="col">
                    Jumbo Card
                </div>
                <div class="col">
                    Jumbo Card
                </div>
            </div>
        </section>


        <!-- Deals -->
        <ProductDealsSection />


        <!-- Testimonials -->
        <section class="bg-success container py-5 text-center">
            Testimonial Card
        </section>


        <!-- Blogs -->
        <section class="bg-danger container py-5">
            <div class="row row-cols-3">
                <div v-for="blog in store.blogs" :key="blog.id" class="col">
                    <BlogCard v-bind="blog" />
                </div>
            </div>
        </section>


        <!-- Brands -->
        <section class="bg-success container py-5">

            <div class="row row-cols-5">
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
            </div>

        </section>

    </main>
</template>


<style></style>