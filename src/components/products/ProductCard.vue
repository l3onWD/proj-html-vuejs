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
        totalSell: Number,
        deal: Boolean
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
    <div @mouseover="isSelected = true" @mouseleave="isSelected = false" class="product-card m-2">

        <!-- Image -->
        <div class="product-image">

            <img v-show="!isSelected" :src="imgFrontPath" :alt="name" class="img-fluid">
            <img v-show="isSelected" :src="imgBackPath" :alt="name" class="img-fluid">

            <!-- Discount -->
            <div v-if="discount" class="product-discount tag">{{ discountString }}</div>
        </div>

        <!-- Info -->
        <div class="product-info p-3">

            <!-- Vote -->
            <div class="product-vote mb-2">
                <FontAwesomeIcon v-for="n in 5" :key="n" icon="fas fa-star" :class="{ 'text-yellow': n <= vote }" />
            </div>

            <!-- Name -->
            <h5>{{ name }}</h5>

            <!-- Price -->
            <div>
                <del v-if="priceOld" class="me-2">{{ priceOldString }}</del>
                <span class="text-yellow">{{ priceString }}</span>
            </div>


            <!-- Actions -->
            <ul class="product-actions">
                <li>
                    <button>
                        <FontAwesomeIcon icon="fas fa-shopping-bag" />
                    </button>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon="fas fa-heart" />
                    </button>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon="fas fa-maximize" />
                    </button>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon="fas fa-eye" />
                    </button>
                </li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.product-card {
    position: relative;

    box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.1);

    .product-image {

        .product-discount {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    }

    .product-info {
        background-color: $col-dark;
    }

    .product-vote {
        font-size: 0.8rem;
    }

    .product-actions {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        display: none;
        background-color: $col-dark;
        border-top: 1px solid $col-darkgray;

        &>* {
            flex: 0 0 25%;

            border-left: 1px solid $col-darkgray;
        }

        &>*:first-child {
            border-left: none;
        }

        button {
            padding: 0.5rem;
            width: 100%;
        }

    }

    &:hover .product-actions {
        display: flex;
    }

}
</style>