<script>
export default {
    data() {
        return {
            windowTop: 0,
            isActive: true
        };
    },

    methods: {
        handleScroll() {
            const topThreshold = 200;

            // Update window top
            this.windowTop = window.top.scrollY;

            // Handle button visibility
            this.windowTop < topThreshold ? this.isActive = false : this.isActive = true;
        },

        goTop() {
            window.scrollTo(0, 0);
        }
    },


    created() {
        window.addEventListener("scroll", this.handleScroll);

        // Init data variables on creation
        this.handleScroll();
    },


    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>


<template>
    <button @click="goTop" :class="{ 'show': isActive }">
        <FontAwesomeIcon icon="fas fa-angle-up" />
    </button>
</template>


<style scoped>
button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #fff;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: bold;

    visibility: hidden;
    opacity: 0;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s, visibility 0.3s;
}

button.show {
    visibility: visible;
    opacity: 0.3;
}

button.show:hover {
    opacity: 1;
}
</style>