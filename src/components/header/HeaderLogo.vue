<script>
export default {


}
</script>


<template>
    <a href="#">
        <img src="@/assets/img/logo.png" alt="Logo">
    </a>
</template>


<style scoped>
a {
    padding: 1.5rem 0;

    display: block;
}

img {
    height: 25px;
}

/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA SM ***/
@media screen and (min-width: 576px) {
    img {
        height: 33px;
    }
}
</style>