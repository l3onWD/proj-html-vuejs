<script>
export default {

    props: {
        iconClass: String,
        text: String,
        description: String
    }

}
</script>


<template>
    <button class="d-flex align-items-center flex-column flex-lg-row text-lg-start">
        <FontAwesomeIcon :icon="['fas', iconClass]" size="2xl" class="mb-2 mb-lg-0" />
        <span class="d-flex flex-column ms-3">
            <span>{{ text }}</span>
            <span class="text-gray">{{ description }}</span>
        </span>
    </button>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

button {

    &:hover p:first-child,
    &:hover svg {
        color: $col-yellow;
    }

}
</style>