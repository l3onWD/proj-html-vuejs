<script>
export default {
    props: {
        socials: Array
    }
}
</script>


<template>
    <nav class="social-bar">
        <ul class="d-flex justify-content-center justify-content-lg-start">
            <li v-for="social in socials" :key="social.link">
                <a :href="social.link">
                    <i>
                        <FontAwesomeIcon :icon="['fab', social.iconClass]" />
                    </i>
                </a>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
nav {
    ul {

        a {
            padding: 0.5rem;

            display: block;
            font-size: 1.3rem;

            i {
                width: 24px;
                height: 24px;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>