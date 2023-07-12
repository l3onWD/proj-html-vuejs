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
    <button>
        <FontAwesomeIcon :icon="['fas', iconClass]" size="2xl" />
        <span class="d-flex flex-column align-items-start ms-3">
            <span>{{ text }}</span>
            <span class="text-gray">{{ description }}</span>
        </span>
    </button>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

button {
    display: flex;
    align-items: center;

    &:hover p:first-child,
    &:hover svg {
        color: $col-yellow;
    }

}
</style>