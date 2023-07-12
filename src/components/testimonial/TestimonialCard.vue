<script>
export default {

    props: {
        imgFile: String,
        name: String,
        role: String,
        text: String
    },
    computed: {

        imgPath() {
            const url = new URL(`../../assets/img/testimonials/${this.imgFile}`, import.meta.url);
            return url.href;
        }

    }

}
</script>


<template>
    <div class="testimonial-card w-50 mx-auto py-5">

        <!-- Image -->
        <div class="testimonial-image mb-4 mx-auto">
            <img :src="imgPath" :alt="name">

            <FontAwesomeIcon icon="fas fa-quote-left" class="text-yellow" />

        </div>

        <!-- Name -->
        <h5 class="mb-4">{{ name }} <span class="text-yellow ms-2">({{ role }})</span></h5>

        <!-- Content -->
        <p>{{ text }}</p>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.testimonial-card {

    .testimonial-image {
        width: 100px;
        height: 100px;
        position: relative;

        img {
            width: 100%;
            height: 100%;

            border: 2px solid $col-yellow;
            border-radius: 50%;
        }

        svg {
            position: absolute;
            top: 5px;
            left: 5px;
        }
    }
}
</style>