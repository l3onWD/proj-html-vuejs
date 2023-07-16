<script>
export default {
    data() {
        return {
            isActive: false
        };
    },
    props: {
        text: String
    }
}
</script>


<template>
    <div class="dropmenu">

        <!-- Toggler -->
        <button @click="isActive = !isActive" :class="{ active: isActive }">
            {{ text }}
            <FontAwesomeIcon icon="fas fa-angle-down" />
        </button>

        <!-- Menu content -->
        <div v-show="isActive" class="dropmenu-content">
            <slot></slot>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.dropmenu {
    position: relative;

    button {
        padding: 0.5rem 1.5rem;

        &.active {
            color: $col-yellow;
        }
    }

    .dropmenu-content {
        padding: 0.75rem 0;
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 150px;

        background-color: $col-dark;
        border: 1px solid $col-darkgray;

        box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.2);
        z-index: 1;
    }
}
</style>