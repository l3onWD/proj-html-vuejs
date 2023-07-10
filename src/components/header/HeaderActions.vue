<script>
export default {


}
</script>


<template>
    <ul class="h-100 d-flex">

        <!-- Search Products -->
        <li>
            <button>
                <FontAwesomeIcon icon="fas fa-search" />
            </button>
        </li>

        <!-- User Account -->
        <li>
            <button>
                <FontAwesomeIcon icon="fas fa-user" />
            </button>
        </li>

        <!-- Shopping Cart -->
        <li>
            <button>
                <FontAwesomeIcon icon="fas fa-bag-shopping" /><span class="ms-2 text-yellow">(0) €0.00</span>
            </button>
        </li>
    </ul>
</template>


<style scoped>
button {
    padding: 0.5rem;
    color: #fff;
}
</style>