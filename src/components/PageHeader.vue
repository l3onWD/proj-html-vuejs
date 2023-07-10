<script>
export default {


}
</script>


<template>
    <header>

        <nav class="container">
            <!-- Header Top -->
            <ul class="d-flex justify-content-between align-items-center py-2">

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


            <!-- Header Bottom -->
            <ul class="row align-items-center">
                <!-- Logo -->
                <li class="col-auto">
                    <a href="#">
                        <img src="@/assets/img/logo.png" alt="Logo">
                    </a>
                </li>

                <!-- Menu -->
                <li class="col">
                    <ul class="d-flex justify-content-center">
                        <li><a href="#">Link 01</a></li>
                        <li><a href="#">Link 02</a></li>
                        <li><a href="#">Link 03</a></li>
                        <li><a href="#">Link 04</a></li>
                        <li><a href="#">Link 05</a></li>
                        <li><a href="#">Link 06</a></li>
                    </ul>
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
        </nav>

    </header>
</template>


<style scoped></style>