<script>
export default {


}
</script>


<template>
    <ul class="d-flex justify-content-center">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Media</a></li>
        <li><a href="#">ShortCode</a></li>
        <li><a href="#">Features</a></li>
    </ul>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


a {
    padding: 2rem 1.5rem;

    display: block;
    font-size: 1.1rem;
    font-weight: bold;

    &.active {
        color: $col-yellow;
    }
}
</style>