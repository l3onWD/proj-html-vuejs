<script>
export default {

    props: {
        iconClass: String
    }
}
</script>


<template>
    <form>
        <input type="text">
        <button>
            <FontAwesomeIcon :icon="['fas', iconClass]" size="lg" />
        </button>
    </form>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


form {
    position: relative;

    input {
        padding-right: 40px;
        width: 100%;
    }

    button {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);

        color: #000;

        &:hover {
            color: $col-yellow;
        }
    }
}
</style>