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
        <div class="text-start ms-3">
            <p class="mb-0">{{ text }}</p>
            <p class="text-gray mb-0">{{ description }}</p>
        </div>
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