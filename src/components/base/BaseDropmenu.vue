<script>
export default {
    data() {
        return {
            isActive: false
        };
    },

    props: {
        text: String,
        position: String
    },

    methods: {
        hideDropmenu() {
            this.isActive = false;
        }
    }
}
</script>


<template>
    <div class="dropmenu" :class="position" v-click-outside="hideDropmenu">

        <!-- Toggler -->
        <div @click="isActive = !isActive" class="dropmenu-toggler" :class="{ active: isActive }">
            <slot name="toggler"></slot>
        </div>

        <!-- Menu content -->
        <Transition name="pop-in">
            <div v-show="isActive" class="dropmenu-content">
                <slot name="content"></slot>
            </div>
        </Transition>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.dropmenu {
    position: relative;

    .dropmenu-toggler {
        height: 100%;

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

.dropmenu.left {
    .dropmenu-content {
        left: auto;
        right: 0;
    }
}


/*** Transition ***/
.pop-in-enter-from {
    transform: scale(0.9);
}

.pop-in-enter-to {
    transform: scale(1);
}

.pop-in-enter-active {
    transition: transform 0.15s;
}
</style>