<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import FooterMenu from '@/components/footer/FooterMenu.vue';

/*** DATA ***/
import { footerMenues } from '@/data/';


export default {
    components: { FooterMenu },

    data() {
        return {
            menues: footerMenues
        };
    }

}
</script>


<template>
    <footer>

        <!-- Footer Top -->
        <div class="container footer-top">

        </div>


        <!-- Footer Bottom -->
        <div class="footer-bottom">

            <div class="container d-flex justify-content-between py-2">

                <address>Copyright &copy; 2023</address>

                <ul class="payment-list">
                    <li>
                        <img src="../assets/img/cc/cc-american-express.png" alt="American Express" class="img-fluid">
                    </li>

                    <li>
                        <img src="../assets/img/cc/cc-paypal.png" alt="Paypal" class="img-fluid">
                    </li>

                    <li>
                        <img src="../assets/img/cc/cc-mastercard.png" alt="Mastercard" class="img-fluid">
                    </li>

                    <li>
                        <img src="../assets/img/cc/cc-visa.png" alt="Visa" class="img-fluid">
                    </li>
                </ul>
            </div>

        </div>

    </footer>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


footer {

    background-image: url('@/assets/img/footer-bg.png');
    background-position: top center;
    background-size: cover;

    .footer-top {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .footer-bottom {
        color: $col-gray;
        border-top: 2px solid $col-darkgray;
    }

    .payment-list {
        display: flex;
        gap: 0.5rem;

        img {
            height: 25px;
        }
    }
}
</style>