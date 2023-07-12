<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProductSection from '@/components/products/ProductSection.vue';
import ProductDealsSection from '@/components/products/ProductDealsSection.vue';
import BrandSection from '@/components/brands/BrandSection.vue';
import JumbotronSection from '@/components/cta/JumbotronSection.vue';
import CtaCard from '@/components/cta/CtaCard.vue';
import ServicesSection from '@/components/cta/ServicesSection.vue';
import CategoryCard from '@/components/categories/CategoryCard.vue';
import BlogsSection from '@/components/blog/BlogsSection.vue';
import TestimonialSection from '@/components/testimonial/TestimonialSection.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BlogsSection, ProductSection, ProductDealsSection, CtaCard, ServicesSection, CategoryCard, TestimonialSection, BrandSection, JumbotronSection },

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

        <!-- CTA Section -->
        <JumbotronSection />

        <!-- Services -->
        <ServicesSection />


        <!-- Featured -->
        <section class="container py-5">

            <div class="row row-cols-2">

                <div class="col">
                    <CtaCard imgFile="cms-banner-01.jpg" imgTitle="The Battlefield 4 Naval Strike">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">Most Popular</h5>
                            <h3>The Battlefield 4 Naval Strike</h3>
                        </div>
                    </CtaCard>
                </div>

                <div class="col">
                    <CtaCard imgFile="cms-banner-02.jpg" imgTitle="Assassin's Creed Unity Game">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">Latest Game</h5>
                            <h3>Assassin's Creed Unity Game</h3>
                        </div>
                    </CtaCard>
                </div>

            </div>

        </section>


        <!-- Categories -->
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


        <!-- Products -->
        <ProductSection @products-filter-changed="$emit('products-filter-changed')" />


        <!-- Offers -->
        <section class="container py-5">
            <div class="row row-cols-2">
                <div class="col">
                    <CtaCard imgFile="cms-banner-03.jpg" imgTitle="Dragon's Dogma Video Game">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">20% Discount</h5>
                            <h3>Dragon's Dogma Video Game</h3>
                        </div>
                    </CtaCard>
                </div>
                <div class="col">
                    <CtaCard imgFile="cms-banner-04.jpg" imgTitle="World Of Tanks New Game">
                        <div class="w-50 ms-auto pe-3">
                            <h5 class="tag">30% Discount</h5>
                            <h3>World Of Tanks New Game</h3>
                        </div>
                    </CtaCard>
                </div>
            </div>
        </section>


        <!-- Deals -->
        <ProductDealsSection />


        <!-- Testimonials -->
        <TestimonialSection />


        <!-- Blogs -->
        <BlogsSection />


        <!-- Brands -->
        <BrandSection />

    </main>
</template>