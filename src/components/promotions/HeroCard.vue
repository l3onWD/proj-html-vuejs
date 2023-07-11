<script>
export default {

    props: {
        imgFile: String,
        imgTitle: String,
    },
    computed: {
        imgPath() {
            const url = new URL(`../../assets/img/banners/${this.imgFile}`, import.meta.url);
            return url.href;
        }
    }
}
</script>


<template>
    <div class="hero-card">

        <!-- Hero Image -->
        <img :src="imgPath" :alt="imgTitle" class="hero-img">

        <!-- Hero Content -->
        <div class="hero-content">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.hero-card {
    height: 100%;
    position: relative;


    .hero-img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    .hero-content {
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
    }
}
</style>