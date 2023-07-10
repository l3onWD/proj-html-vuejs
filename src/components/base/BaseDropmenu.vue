<script>
export default {
    data() {
        return {
            isActive: false
        };
    },
    props: {
        text: String,
        links: Array
    }
}
</script>


<template>
    <div class="dropmenu">

        <!-- Toggler -->
        <button @click="isActive = !isActive">{{ text }}
            <FontAwesomeIcon icon="fas fa-angle-down" />
        </button>

        <!-- Menu content -->
        <ul v-if="isActive">
            <li v-for="link in links" :key="link.text"><a :href="link.url">{{ link.text }}</a></li>
        </ul>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.dropmenu {
    position: relative;

    button {
        padding: 0.5rem 1.5rem;
    }

    ul {
        padding: 0.75rem 0;
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 100%;

        background-color: $col-dark;
        border: 1px solid $col-darkgray;

        box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.2);

        a {
            padding: 0.25rem 1rem;

            display: block;
        }
    }
}
</style>