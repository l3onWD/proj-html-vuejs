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
    <div class="cta-card">

        <!-- CTA Image -->
        <img :src="imgPath" :alt="imgTitle" class="cta-img">

        <!-- CTA Content -->
        <div class="cta-content">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.cta-card {
    height: 100%;
    position: relative;


    .cta-img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    .cta-content {
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
    }
}
</style>