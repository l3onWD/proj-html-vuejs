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

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components: { BlogCard, ProductSection, ProductDealsSection, HeroCard, HeroSection, FontAwesomeIcon },

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
        <section class="container py-5">

            <div class="row row-cols-4">

                <div class="col">
                    <div class="d-flex align-items-center">
                        <FontAwesomeIcon icon="fas fa-truck" size="2xl" />
                        <div class="ms-3">
                            <p class="mb-0">Free Delivery</p>
                            <p class="text-gray mb-0">Free Shipping On All Order</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex align-items-center">
                        <FontAwesomeIcon icon="fas fa-sack-dollar" size="2xl" />
                        <div class="ms-3">
                            <p class="mb-0">Money Return</p>
                            <p class="text-gray mb-0">Back Guarantee in 7 days</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex align-items-center">
                        <FontAwesomeIcon icon="fas fa-percent" size="2xl" />
                        <div class="ms-3">
                            <p class="mb-0">Member Discount</p>
                            <p class="text-gray mb-0">On every order over €130.00</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex align-items-center">
                        <FontAwesomeIcon icon="fas fa-hand-holding-dollar" size="2xl" />
                        <div class="ms-3">
                            <p class="mb-0">Return Policy</p>
                            <p class="text-gray mb-0">Support 24 hours a day</p>
                        </div>
                    </div>
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