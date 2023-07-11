<script>
export default {

    props: {
        imgFile: String,
        name: String
    },

    computed: {
        imgPath() {
            const url = new URL(`../../assets/img/categories/${this.imgFile}`, import.meta.url);
            return url.href;
        }
    }

}
</script>


<template>
    <div class="category-card" :title="name">
        <!-- Category Image -->
        <img :src="imgPath" alt="category" class="img-fluid">

        <!-- Category Info -->
        <div class="category-body">
            <h5>{{ name }}</h5>
            <a href="#" class="text-yellow text-decoration-underline">Shop Now</a>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.category-card {
    position: relative;

    box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.5);

    .category-body {
        padding: 1rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: rgba($color: $col-dark, $alpha: 0.5);
    }

    &:hover .category-body {
        background-color: $col-dark;
    }
}
</style>