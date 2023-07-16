<script>
export default {


}
</script>


<template>
    <div>
        <img src="../../assets/img/loading.gif" alt="Loading">
    </div>
</template>


<style scoped>
div {
    position: absolute;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);

    z-index: 1;
}

img {
    width: 80px;
}
</style>