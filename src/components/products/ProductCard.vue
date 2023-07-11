<script>
export default {
    data() {
        return {
            isSelected: false
        };
    },

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
        },

        imgBackPath() {
            const url = new URL(`../../assets/img/products/${this.imgFileBack}`, import.meta.url);
            return url.href;
        },

        discountString() {
            if (!this.discount) return;
            return `-${this.discount}%`;
        },

        priceString() {
            const priceFormat = (this.price / 100).toFixed(2)
            return `€${priceFormat}`;
        },

        priceOldString() {
            if (!this.priceOld) return

            const priceFormat = (this.priceOld / 100).toFixed(2)
            return `€${priceFormat}`;
        }
    }

}
</script>


<template>
    <div @mouseover="isSelected = true" @mouseleave="isSelected = false" class="product-card p-2">

        <!-- Image -->
        <div class="product-image">
            <img v-if="!isSelected" :src="imgFrontPath" :alt="name" class="img-fluid">
            <img v-else :src="imgBackPath" :alt="name" class="img-fluid">
            <div v-if="discount" class="product-discount">{{ discountString }}</div>
        </div>

        <!-- Body -->
        <div class="product-info p-3">

            <!-- Vote -->
            <div>
                <FontAwesomeIcon v-for="n in 5" :key="n" icon="fas fa-star" :class="{ 'text-yellow': n <= vote }" />
            </div>

            <h5>{{ name }}</h5>

            <div>
                <del v-if="priceOld">{{ priceOldString }}</del>
                <span class="text-yellow ms-2">{{ priceString }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.product-image {
    position: relative;

    .product-discount {
        position: absolute;
        top: 10px;
        left: 10px;
    }
}

.product-info {
    background-color: $col-dark;
}
</style>