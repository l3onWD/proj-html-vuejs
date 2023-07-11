<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProductSection from '@/components/products/ProductSection.vue';
import ProductDealsSection from '@/components/products/ProductDealsSection.vue';
import HeroSection from '@/components/promotions/HeroSection.vue';
import HeroCard from '@/components/promotions/HeroCard.vue';
import BlogCard from '@/components/blog/BlogCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BlogCard, ProductSection, ProductDealsSection, HeroCard, HeroSection },

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
        <HeroSection />


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
                    <HeroCard imgFile="cms-banner-01.jpg" imgTitle="The Battlefield 4 Naval Strike">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">Most Popular</h5>
                            <h3>The Battlefield 4 Naval Strike</h3>
                        </div>
                    </HeroCard>
                </div>
                <div class="col">
                    <HeroCard imgFile="cms-banner-02.jpg" imgTitle="Assassin's Creed Unity Game">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">Latest Game</h5>
                            <h3>Assassin's Creed Unity Game</h3>
                        </div>
                    </HeroCard>
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
                    <HeroCard imgFile="cms-banner-03.jpg" imgTitle="Dragon's Dogma Video Game">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">20% Discount</h5>
                            <h3>Dragon's Dogma Video Game</h3>
                        </div>
                    </HeroCard>
                </div>
                <div class="col">
                    <HeroCard imgFile="cms-banner-04.jpg" imgTitle="World Of Tanks New Game">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">30% Discount</h5>
                            <h3>World Of Tanks New Game</h3>
                        </div>
                    </HeroCard>
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