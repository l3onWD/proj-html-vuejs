import { reactive } from "vue";

export const store = reactive({
    products: [],
    productDeals: [],
    productsFilter: 'featured',
    blogs: []
});