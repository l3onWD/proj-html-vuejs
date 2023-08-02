<script>
export default {

    data() {
        return {
            index: 0,
            autoplayId: null,
            totalVisibleItems: null,
            mediaQueries: []
        };
    },

    props: {
        // Required
        responsive: Object,
        totalItems: Number,

        // Optional
        navDots: Boolean,
        infinite: Boolean,
        autoplay: Number
    },

    computed: {

        // Get items cols based on visible slides (max 6)
        carouselCols() {
            let responsiveRows = [];
            for (const breakpoint in this.responsive) {
                if (breakpoint === 'xs') responsiveRows.push(`items-${this.responsive[breakpoint]}`);
                else responsiveRows.push(`items-${breakpoint}-${this.responsive[breakpoint]}`);
            }
            return responsiveRows;
        },

        // Get max index based on visible slides
        maxIndex() {
            return Math.max(this.totalItems - (this.totalVisibleItems), 0);
        },

        // Create css property for sliding
        left() {
            return `calc(100% / ${this.totalVisibleItems} * -${this.index} )`
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
        },

        handleResponsive() {

            this.setIndex(0);

            // Update totalVisibleItems by matching queries
            this.mediaQueries.forEach(({ mediaQuery, items }) => {
                if (mediaQuery.matches) this.totalVisibleItems = items;
            });;

        }
    },

    created() {
        // Breakpoints (for query listener)
        const breakpoints = [
            { name: 'xs', width: 0 },
            { name: 'sm', width: 576 },
            { name: 'md', width: 768 },
            { name: 'lg', width: 992 },
            { name: 'xl', width: 1200 },
            { name: 'xxl', width: 1400 }
        ];


        // Set Media Query Listener
        for (const breakpoint in this.responsive) {

            const width = breakpoints.find(bp => bp.name === breakpoint).width;

            this.mediaQueries.push({
                mediaQuery: window.matchMedia(`(min-width: ${width}px)`),
                items: this.responsive[breakpoint]
            });

            this.mediaQueries[this.mediaQueries.length - 1].mediaQuery.addEventListener('change', this.handleResponsive);
        }


        // Set initial visible items
        this.handleResponsive();


        // Set autoplay (if checked)
        this.startAutoplay();
    },

    unmounted() {
        // Remove Media Query Listener
        this.mediaQueries.forEach(({ mediaQuery }) => {
            mediaQuery.removeEventListener('change', this.handleResponsive);
        });
    }


}
</script>


<template>
    <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">

        <!-- Slides Container -->
        <div class="carousel-items" :class="carouselCols">
            <slot></slot>
        </div>

        <!-- Nav Arrows -->
        <div v-if="!navDots && totalItems > totalVisibleItems">

            <button v-show="infinite || index" @click="slideTo('prev')" class="nav-arrow nav-prev">
                <FontAwesomeIcon icon="fas fa-circle-chevron-left" size="2xl" />
            </button>

            <button v-show="infinite || index < maxIndex" @click="slideTo('next')" class="nav-arrow nav-next">
                <FontAwesomeIcon icon="fas fa-circle-chevron-right" size="2xl" />
            </button>
        </div>

        <!-- Nav Dots -->
        <div v-else-if="navDots && totalItems > totalVisibleItems" class="nav-dots">
            <button @click="setIndex(n - 1)" v-for="n in totalItems" :key="n" :class="{ 'text-yellow': index === (n - 1) }">
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


    /* Items */
    .carousel-items {
        position: relative;
        height: 100%;
        left: v-bind('left');

        display: flex;

        transition: left 0.2s;
    }

    .carousel-items>:deep(*) {
        flex: 0 0 100%;
    }

    @for $i from 2 through 6 {
        .carousel-items.items-#{$i}>:deep(*) {
            flex-basis: calc(100% / $i);
        }
    }


    /* Nav */
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
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);

        text-align: center;

        &>button {
            padding: 0.25rem;
        }
    }
}


/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** SM ***/
@media screen and (min-width: 576px) {
    .carousel {
        @for $i from 2 through 6 {
            .carousel-items.items-sm-#{$i}> :deep(*) {
                flex-basis: calc(100% / $i);
            }
        }
    }
}

/*** MD ***/
@media screen and (min-width: 768px) {
    .carousel {
        @for $i from 2 through 6 {
            .carousel-items.items-md-#{$i}> :deep(*) {
                flex-basis: calc(100% / $i);
            }
        }
    }
}

/*** LG ***/
@media screen and (min-width: 992px) {
    .carousel {
        @for $i from 2 through 6 {
            .carousel-items.items-lg-#{$i}> :deep(*) {
                flex-basis: calc(100% / $i);
            }
        }
    }
}

/*** XL ***/
@media screen and (min-width: 1200px) {
    .carousel {
        @for $i from 2 through 6 {
            .carousel-items.items-xl-#{$i}> :deep(*) {
                flex-basis: calc(100% / $i);
            }
        }
    }
}

/*** XXL ***/
@media screen and (min-width: 1400px) {
    .carousel {
        @for $i from 2 through 6 {
            .carousel-items.items-xxl-#{$i}> :deep(*) {
                flex-basis: calc(100% / $i);
            }
        }
    }
}
</style>