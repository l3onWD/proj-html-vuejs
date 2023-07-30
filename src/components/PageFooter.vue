<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSendForm from '@/components/base/BaseSendForm.vue';
import BaseSocialBar from '@/components/base/BaseSocialBar.vue';
import FooterMenu from '@/components/footer/FooterMenu.vue';

/*** DATA ***/
import { footerMenues, socialLinks } from '@/data/';


export default {
    components: { FooterMenu, BaseSendForm, BaseSocialBar },

    data() {
        return {
            menues: footerMenues,
            socials: socialLinks
        };
    }

}
</script>


<template>
    <footer>

        <!-- Footer Top -->
        <div class="container footer-top">

            <div class="row g-3 row-cols-1 row-cols-lg-4">

                <!-- Menues -->
                <div v-for="menu in menues" :key="menu.title" class="col">
                    <FooterMenu :title="menu.title" :links="menu.links" />
                </div>


                <div class="col">

                    <!-- Newsletter -->
                    <div class="mb-3">
                        <h5 class="mb-3">Our Newsletter</h5>
                        <p class="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <BaseSendForm iconClass="paper-plane" />
                    </div>

                    <!-- Social Bar -->
                    <BaseSocialBar :socials="socials" />
                </div>

            </div>

        </div>


        <!-- Footer Bottom -->
        <div class="footer-bottom">

            <div class="container d-flex justify-content-between py-2">

                <!-- Copyright -->
                <address>Copyright &copy; 2023</address>


                <!-- payments -->
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