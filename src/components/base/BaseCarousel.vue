<script>
export default {


}
</script>


<template>
    <div class="carousel">

        <div class="carousel-items">
            <slot></slot>
        </div>

        <button class="carousel-nav nav-prev">
            <FontAwesomeIcon icon="fas fa-circle-chevron-left" size="2xl" />
        </button>
        <button class="carousel-nav nav-next">
            <FontAwesomeIcon icon="fas fa-circle-chevron-right" size="2xl" />
        </button>
    </div>
</template>


<style lang="scss">
@use '@/assets/scss/vars' as *;


.carousel {
    position: relative;

    .carousel-items {
        padding: 0.25rem;
        position: relative;

        display: flex;

        overflow: hidden;

        &>* {
            flex-basis: calc(100% / 4);
        }
    }

    .carousel-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            color: $col-yellow;
        }

        &.nav-prev {
            left: 0;
        }

        &.nav-next {
            right: 0;
        }
    }
}
</style>