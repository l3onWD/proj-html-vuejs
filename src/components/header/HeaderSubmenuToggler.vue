<script>
export default {
    data() {
        return {
            show: false
        };
    },

    methods: {
        onToggling() {
            this.show = !this.show;
            this.$emit('menu-toggled', this.show);
        }
    },

    emits: ['menu-toggled']

}
</script>


<template>
    <button class="header-submenu-toggler" @click="onToggling">
        <FontAwesomeIcon :icon="['fas', show ? 'angle-right' : 'angle-down']" />
    </button>
</template>


<style scoped>
.header-submenu-toggler {
    position: absolute;
    top: 0;
    right: 0;
    width: 64px;
    height: 32px;
    padding: 0 0.5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
}

/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA LG ***/
@media screen and (min-width: 992px) {

    .header-submenu-toggler {
        display: none;
    }
}
</style>