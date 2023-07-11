<script>
/*** COMPONENTS ***/
import ProductCard from '@/components/products/ProductCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { ProductCard },
    data() {
        return {
            store
        };
    }


}
</script>


<template>
    <main>

        <!-- Jumbotron -->
        <section class="bg-danger vh-100 d-flex">
            <h2 class="m-auto">jumbotron</h2>
        </section>


        <!-- Services -->
        <section class="bg-success container py-5">

            <div class="row row-cols-4">
                <div class="col">
                    Service Card
                </div>
                <div class="col">
                    Service Card
                </div>
                <div class="col">
                    Service Card
                </div>
                <div class="col">
                    Service Card
                </div>
            </div>

        </section>


        <!-- Featured -->
        <section class="bg-danger container py-5">
            <div class="row row-cols-2">
                <div class="col">
                    Jumbo Card
                </div>
                <div class="col">
                    Jumbo Card
                </div>
            </div>
        </section>


        <!-- Categories -->
        <section class="bg-success container py-5">
            <div class="row row-cols-3">
                <div class="col">
                    Category Card
                </div>
                <div class="col">
                    Category Card
                </div>
                <div class="col">
                    Category Card
                </div>
            </div>
        </section>


        <!-- Products -->
        <section class="bg-danger container py-5">

            <!-- Filters -->
            <ul class="d-flex gap-3 justify-content-center py-3">
                <li><button>Featured</button></li>
                <li><button>New Arrival</button></li>
                <li><button>Best Sellers</button></li>
            </ul>

            <div class="row row-cols-4">
                <div v-for="product in store.products" :key="product.id" class="col">
                    <ProductCard v-bind="product" />
                </div>
            </div>
        </section>


        <!-- Offers -->
        <section class="bg-success container py-5">
            <div class="row row-cols-2">
                <div class="col">
                    Jumbo Card
                </div>
                <div class="col">
                    Jumbo Card
                </div>
            </div>
        </section>


        <!-- Deals -->
        <section class="bg-danger container py-5">

            <!-- Counter -->
            <ul class="d-flex gap-3 justify-content-center py-3">
                <li>123 days</li>
                <li>24 hours</li>
                <li>12 mins</li>
                <li>17 secs</li>
            </ul>

            <div class="row row-cols-4">
                <div class="col">
                    <ProductCard />
                </div>
                <div class="col">
                    <ProductCard />
                </div>
                <div class="col">
                    <ProductCard />
                </div>
                <div class="col">
                    <ProductCard />
                </div>
            </div>
        </section>


        <!-- Testimonials -->
        <section class="bg-success container py-5 text-center">
            Testimonial Card
        </section>


        <!-- Blogs -->
        <section class="bg-danger container py-5">
            <div class="row row-cols-3">
                <div class="col">
                    Blog Card
                </div>
                <div class="col">
                    Blog Card
                </div>
                <div class="col">
                    Blog Card
                </div>
            </div>
        </section>


        <!-- Brands -->
        <section class="bg-success container py-5">

            <div class="row row-cols-5">
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
                <div class="col">
                    Brand
                </div>
            </div>

        </section>

    </main>
</template>


<style></style>