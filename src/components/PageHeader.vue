<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import HeaderMenu from '@/components/HeaderMenu.vue';


export default {
    components: { HeaderMenu }

}
</script>


<template>
    <header>

        <nav>
            <!-- Header Top -->
            <div>
                <ul class="container d-flex justify-content-between align-items-center py-2">

                    <!-- Left Panel -->
                    <li>
                        <ul class="d-flex">
                            <li><a class="p-2" href="#">Link</a></li>

                            <li>
                                <button>Dropdown</button>
                                <ul class="d-none">
                                    <li><a href="#">123456748</a></li>
                                    <li><a href="#">123456748</a></li>
                                    <li><a href="#">123456748</a></li>
                                    <li><a href="#">123456748</a></li>
                                </ul>
                            </li>
                        </ul>

                    </li>

                    <!-- Right Panel -->
                    <li>
                        <a href="#">123456748</a>
                    </li>

                </ul>
            </div>


            <!-- Header Bottom -->
            <div class="container">

                <ul class="row align-items-center">
                    <!-- Logo -->
                    <li class="col-auto">
                        <a href="#">
                            <img src="@/assets/img/logo.png" alt="Logo">
                        </a>
                    </li>

                    <!-- Menu -->
                    <li class="col">
                        <HeaderMenu />
                    </li>

                    <!-- Actions -->
                    <li class="col-auto">
                        <ul class="d-flex">
                            <li><button>icon</button></li>
                            <li><button>icon</button></li>
                            <li><button>icon</button></li>
                        </ul>
                    </li>
                </ul>

            </div>

        </nav>

    </header>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


header {
    background-color: $col-dark;
}

nav>div:first-child {
    border-bottom: 1px solid $col-gray;
}
</style>