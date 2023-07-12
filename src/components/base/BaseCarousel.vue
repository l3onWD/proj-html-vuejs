<script>
export default {

    props: {
        navDots: Boolean,
        visibleSlides: Number
    },

    computed: {
        carouselCols() {
            return `row no-wrap row-cols-${this.visibleSlides} flex-nowrap`;
        }
    }

}
</script>


<template>
    <div class="carousel">

        <!-- Slides Container -->
        <div class="carousel-items" :class="carouselCols">
            <slot></slot>
        </div>

        <!-- Nav Arrows -->
        <div v-if="!navDots">
            <button class="nav-arrow nav-prev">
                <FontAwesomeIcon icon="fas fa-circle-chevron-left" size="2xl" />
            </button>
            <button class="nav-arrow nav-next">
                <FontAwesomeIcon icon="fas fa-circle-chevron-right" size="2xl" />
            </button>
        </div>

        <!-- Nav Dots -->
        <div v-else class="nav-dots">
            <button v-for="n in 3" :key="n">
                <FontAwesomeIcon icon="fas fa-circle" />
            </button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.carousel {
    position: relative;


    overflow: hidden;

    .carousel-items {
        position: relative;

        display: flex;
    }

    .nav-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &.nav-prev {
            left: 0;
        }

        &.nav-next {
            right: 0;
        }
    }

    .nav-dots {
        padding: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        text-align: center;

        &>button {
            padding: 0.25rem;
        }
    }
}
</style>