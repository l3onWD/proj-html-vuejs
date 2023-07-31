<script>

export default {
    data() {
        return {
            activeTab: null
        };
    },

    props: {
        tabList: Array
    },

    methods: {
        onTabClicked(tabValue) {

            this.activeTab = tabValue;
            this.$emit('tab-changed', tabValue)
        }
    },

    created() {
        this.activeTab = this.tabList[0].value;
    },

    emits: ['tab-changed']

}
</script>


<template>
    <nav>
        <ul class="d-flex flex-column flex-sm-row justify-content-center align-items-center">
            <li v-for="tab in tabList" :key="tab.text">
                <button @click="onTabClicked(tab.value)" :class="{ active: tab.value === activeTab }" class="btn">{{
                    tab.text
                }}</button>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

button.btn {

    padding: 0.5rem 1.5rem;

    &.active {
        color: $col-yellow;
    }
}



/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA SM ***/
@media screen and (min-width: 576px) {
    button.btn {
        padding: 0.75rem 2rem;

        border: 1px solid $col-darkgray;
    }
}
</style>