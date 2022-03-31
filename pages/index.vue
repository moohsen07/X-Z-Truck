<template>
  <div class="home">
    <banner />
    <parteners />
    <about-us />
    <how-work />
    <shipper-section />
    <statistics />
    <testimonials />
    <section class="mt-20" id="getQuote">
      <div class="container">
        <h3 class="text-2xl sm:text-4xl text-center font-bold">Get a Quote</h3>
        <quote-form class="max-w-xl mx-auto" />
      </div>
    </section>
    <footer class="bg-black mt-20 p-10 text-center">
      <base-img img="logo_white.png" alt="X&Z Logo" />
      <div class="w-full border border-solid border-muted my-10"></div>
      <div class="copy-right text-white">
        Copyright &copy;2022 X&Y , Designed By
        <a href="#" class="text-primary">Ahmed</a>
      </div>
    </footer>
  </div>
</template>

<script>
import AboutUs from '~/components/AboutUs.vue'
import Banner from '~/components/Banner/Banner.vue'
import QuoteForm from '~/components/Banner/QuoteForm.vue'
import BaseImg from '~/components/baseImg.vue'
import HowWork from '~/components/HowWork.vue'
import Parteners from '~/components/Parteners.vue'
import ShipperSection from '~/components/ShipperSection.vue'
import Statistics from '~/components/Statistics.vue'
import Testimonials from '~/components/Testimonials/Testimonials.vue'
export default {
  name: 'IndexPage',
  components: {
    Banner,
    BaseImg,
    Parteners,
    AboutUs,
    HowWork,
    ShipperSection,
    Statistics,
    Testimonials,
    QuoteForm,
  },
}
</script>


<style lang="scss">
footer {
  img {
    width: 200px;
    margin: auto;
  }
}
</style>
