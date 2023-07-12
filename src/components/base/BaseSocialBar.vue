<script>
export default {
    props: {
        socials: Array
    }
}
</script>


<template>
    <nav class="social-bar py-2">
        <ul>
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
        display: flex;

        a {
            padding: 0.5rem;

            display: block;

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