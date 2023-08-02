<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BlogCard from '@/components/blog/BlogCard.vue';
import BaseCarousel from '@/components/base/BaseCarousel.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BlogCard, BaseCarousel },

    data() {
        return {
            store
        };
    }

}
</script>


<template>
    <section class="container py-5">
        <header>
            <h3 class="text-center mb-5">New Game Blogs</h3>
        </header>

        <BaseCarousel :responsive="{ 'xs': 1, 'sm': 2, 'lg': 3 }" :total-items="store.blogs.length" infinite>
            <div v-for="blog in store.blogs" :key="blog.id">
                <BlogCard v-bind="blog" />
            </div>
        </BaseCarousel>

    </section>
</template>