<script>
export default {
    props: {
        id: Number,
        name: String,
        imgFileFront: String,
        imgFileBack: String,
        price: Number,
        priceOld: Number,
        discount: Number,
        vote: Number,
        featured: Boolean,
        created: String,
        totalSell: Number
    },

    computed: {
        imgFrontPath() {
            const url = new URL(`../../assets/img/products/${this.imgFileFront}`, import.meta.url);
            return url.href;
        }
    }

}
</script>


<template>
    <div>

        <!-- Image -->
        <div>
            <img :src="imgFrontPath" :alt="name" class="img-fluid">
            <!-- <img src="@/assets/img/products/01.jpg" alt="Product" class="img-fluid"> -->
        </div>

        <!-- Body -->
        <div>

            <!-- Vote -->
            <div>{{ vote }}</div>

            <h5>{{ name }}</h5>

            <div>
                <span v-if="priceOld">€{{ priceOld }}</span>€{{ price }}
            </div>

        </div>
    </div>
</template>


<style></style>