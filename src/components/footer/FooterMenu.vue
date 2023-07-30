<script>
export default {
    data() {
        return {
            isActive: false
        };
    },
    props: {
        title: String,
        links: Array
    }
}
</script>


<template>
    <nav>
        <h5 class="d-flex justify-content-between mb-3" @click="isActive = !isActive">
            {{ title }}
            <FontAwesomeIcon :icon="['fas', isActive ? 'angle-right' : 'angle-down']" class="d-lg-none" />
        </h5>
        <ul :class="{ 'show': isActive }">
            <li v-for="link in links" :key="link.text">
                <a :href="link.url" class="d-flex align-items-baseline">
                    <FontAwesomeIcon v-if="link.iconClass" :icon="['fas', link.iconClass]" class="text-yellow me-3" />
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

ul {
    display: none;

    &.show {
        display: block;
    }
}

a {
    padding: 0.25rem 0;

    display: block;
    color: $col-gray;
}

h5 {
    cursor: pointer;
}


/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA LG ***/
@media screen and (min-width: 992px) {
    ul {
        display: block;
    }

    h5 {
        cursor: auto;
    }
}
</style>