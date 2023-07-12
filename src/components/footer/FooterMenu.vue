<script>
export default {
    props: {
        title: String,
        links: Array
    }

}
</script>


<template>
    <nav>
        <h5 class="mb-3">{{ title }}</h5>
        <ul>
            <li v-for="link in links" :key="link.text">
                <a :href="link.url" class="d-flex align-items-baseline">
                    <FontAwesomeIcon v-if="link.iconClass" :icon="['fas', link.iconClass]" class="text-yellow me-3" />
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


a {
    padding: 0.25rem 0;

    display: block;
    color: $col-gray;
}
</style>