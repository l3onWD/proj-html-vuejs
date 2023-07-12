<script>
export default {


}
</script>


<template>
    <ul class="h-100 d-flex">

        <!-- Search Products -->
        <li>
            <button class="h-100 btn">
                <FontAwesomeIcon icon="fas fa-search" />
            </button>
        </li>

        <!-- User Account -->
        <li>
            <button class="h-100 btn">
                <FontAwesomeIcon icon="fas fa-user" />
            </button>
        </li>

        <!-- Shopping Cart -->
        <li>
            <button class="h-100 btn">
                <FontAwesomeIcon icon="fas fa-bag-shopping" /><span class="ms-2 text-yellow">(0) €0.00</span>
            </button>
        </li>
    </ul>
</template>


<style scoped>
svg {
    font-size: 1.3rem;
}
</style>