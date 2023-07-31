<script>
export default {
    data() {
        return {
            timerId: null,
            counter: 0
        };
    },

    props: {
        date: Number
    },

    computed: {
        msLeft() {
            return this.date - this.counter;
        },

        days() {
            return Math.floor(this.msLeft / (1000 * 60 * 60 * 24));
        },

        hours() {
            return Math.floor((this.msLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        },

        minutes() {
            return Math.floor((this.msLeft % (1000 * 60 * 60)) / (1000 * 60));
        },

        seconds() {
            return Math.floor(this.msLeft % (1000 * 60) / 1000);
        }
    },

    methods: {
        updateCounter() {
            this.counter += 1000;
            if (this.counter >= this.date) {
                this.counter = this.date;
                clearInterval(this.timerId);
            }
        }
    },

    created() {
        this.counter = Date.now();
        if (this.counter >= this.date) this.counter = this.date;
        else this.timerId = setInterval(this.updateCounter, 1000);
    }

}
</script>


<template>
    <ul class="d-flex justify-content-center text-center">
        <li>{{ days }} days</li>
        <li>{{ hours }} hours</li>
        <li>{{ minutes }} mins</li>
        <li>{{ seconds }} secs</li>
    </ul>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


li {
    padding: 0.5rem 1.5rem;

    border: 1px solid $col-darkgray;
}


/* -----------------------------------------
* RESPONSIVE
-------------------------------------------*/
/*** MEDIA SM ***/
@media screen and (min-width: 576px) {
    li {
        padding: 0.75rem 2rem;
    }
}
</style>