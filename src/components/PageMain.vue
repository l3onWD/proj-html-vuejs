<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import ProductSection from '@/components/products/ProductSection.vue';
import ProductDealsSection from '@/components/products/ProductDealsSection.vue';
import BrandSection from '@/components/brands/BrandSection.vue';
import JumbotronSection from '@/components/cta/JumbotronSection.vue';
import CtaSection from '@/components/cta/CtaSection.vue';
import ServicesSection from '@/components/cta/ServicesSection.vue';
import CategoriesSection from '@/components/categories/CategoriesSection.vue';
import BlogsSection from '@/components/blog/BlogsSection.vue';
import TestimonialSection from '@/components/testimonial/TestimonialSection.vue';


export default {
    components: { BlogsSection, ProductSection, ProductDealsSection, CtaSection, ServicesSection, CategoriesSection, TestimonialSection, BrandSection, JumbotronSection },

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
        <CtaSection cta-type="featured" />

        <!-- Categories -->
        <CategoriesSection />

        <!-- Products -->
        <ProductSection @products-filter-changed="$emit('products-filter-changed')" />


        <!-- Offers -->
        <CtaSection cta-type="discount" />


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