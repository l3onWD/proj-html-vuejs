<script>
export default {

    data() {
        return {
            index: 0,
            autoplayId: null
        };
    },

    props: {
        navDots: Boolean,
        visibleSlides: Number,
        totalSlides: Number,
        infinite: Boolean,
        autoplay: Number
    },

    computed: {

        // Get row cols based in visible slides (max 6)
        carouselCols() {
            return `row-cols-${this.visibleSlides}`;
        },

        // Get max index based on visible slides
        maxIndex() {
            return Math.max(this.totalSlides - (this.visibleSlides), 0);
        },

        // Create css property for sliding
        left() {
            return `left: calc(100% / ${this.visibleSlides} * -${this.index} );`
        }
    },

    methods: {
        setIndex(num) {
            this.index = num;
        },

        slideTo(direction) {
            if (direction === 'prev' && --this.index < 0) {
                if (this.infinite) this.index = this.maxIndex;
                else this.index = 0;

            } else if (direction === 'next' && ++this.index > this.maxIndex) {
                if (this.infinite) this.index = 0;
                else this.index = this.maxIndex;
            }
        },

        startAutoplay() {

            if (!this.autoplay) return;
            this.autoplayId = setInterval(() => { this.slideTo('next') }, this.autoplay);

        },

        stopAutoplay() {
            if (!this.autoplay) return;
            clearInterval(this.autoplayId);
        }
    },

    created() {
        this.startAutoplay();
    }

}
</script>


<template>
    <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">

        <!-- Slides Container -->
        <div class="carousel-items row flex-nowrap g-0" :class="carouselCols" :style="left">
            <slot></slot>
        </div>

        <!-- Nav Arrows -->
        <div v-if="!navDots">

            <button v-show="infinite || index" @click="slideTo('prev')" class="nav-arrow nav-prev">
                <FontAwesomeIcon icon="fas fa-circle-chevron-left" size="2xl" />
            </button>

            <button v-show="infinite || index < maxIndex" @click="slideTo('next')" class="nav-arrow nav-next">
                <FontAwesomeIcon icon="fas fa-circle-chevron-right" size="2xl" />
            </button>
        </div>

        <!-- Nav Dots -->
        <div v-else class="nav-dots">
            <button @click="setIndex(n - 1)" v-for="n in totalSlides" :key="n"
                :class="{ 'text-yellow': index === (n - 1) }">
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

        transition: left 0.2s;
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