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
        <ul class="d-flex justify-content-center py-4">
            <li v-for="tab in tabList" :key="tab.text">
                <button @click="onTabClicked(tab.value)" :class="{ active: tab.value === activeTab }">{{ tab.text
                }}</button>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

button {
    padding: 0.75rem 2rem;

    border: 1px solid $col-darkgray;

    &.active {
        color: $col-yellow;
    }
}
</style>