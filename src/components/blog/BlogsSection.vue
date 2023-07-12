<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BlogCard from '@/components/blog/BlogCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BlogCard },

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

        <div class="row row-cols-3">
            <div v-for="blog in store.blogs" :key="blog.id" class="col">
                <BlogCard v-bind="blog" />
            </div>
        </div>
    </section>
</template>


<style></style>