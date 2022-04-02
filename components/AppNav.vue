<template>
  <nav class="absolute w-full z-50">
    <div class="container">
      <div class="upper-nav hidden md:flex justify-between items-center py-4">
        <div class="phone-mail flex items-center">
          <div class="phone-numbers">
            <span class="text-xs text-muted">Call Us :</span>
            <a class="text-xs text-white" href="tel:+31 85 984 47 20"
              >+31 85 984 47 20</a
            >
            <a class="text-xs text-white ml-1" href="tel:+31 85 984 47 20"
              >+31 85 984 47 20</a
            >
          </div>
          <div class="w-14 h-0.5 bg-primary mx-4"></div>
          <div class="mail">
            <span class="text-xs text-muted">Mail Us :</span>
            <a class="text-xs text-white" href="mailto:Z&X@gmail.com"
              >Z&X@gmail.com</a
            >
          </div>
        </div>
        <div class="follow-us flex">
          <span class="text-muted text-xs">Follow Us : </span>
          <div class="icons flex gap-x-1 text-white">
            <i class="lab la-facebook-f"></i>
            <i class="lab la-twitter"></i>
            <i class="lab la-linkedin-in"></i>
            <i class="lab la-instagram"></i>
          </div>
        </div>
      </div>
      <div class="hidden md:block w-full h-px bg-muted mb-4"></div>
    </div>
    <div class="container fixed-nav transition-all" ref="fixedNav">
      <div
        class="
          base-nav
          flex
          justify-between
          h-16
          box-content
          transition-all
          py-2
          md:py:0
        "
        ref="baseNav"
      >
        <base-img
          :img="'logo_white.png'"
          class="w-36 h-auto self-center"
          alt="X&Z logo"
        />
        <button
          class="
            self-center
            md:self-stretch
            border-solid border-2 border-primary
            bg-primary
            px-3
            py-3
            md:px-12
            text-white
            hover:bg-transparent hover:text-primary
            transition-all
          "
          @click="scrollSection()"
        >
          Get a Quote
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import baseImg from './baseImg.vue'
export default {
  components: { baseImg },
  data() {
    return {
      fixed: false,
    }
  },
  methods: {
    navBarAnimtaion() {
      const fixedNav = this.$refs.fixedNav
      const baseNav = this.$refs.baseNav
      window.onscroll = () => {
        if (window.scrollY > 200) {
          this.fixed = true
          fixedNav.classList.add('fixed', 'top-0')
          baseNav.classList.add('bg-white', 'p-4', 'shadow-lg')
        } else {
          this.fixed = false
          fixedNav.classList.remove('fixed', 'top-0')
          baseNav.classList.remove('bg-white', 'p-4', 'shadow-lg')
        }
      }
    },
    scrollSection() {
      const getQuoteSection = document.querySelector('#getQuote')
      const baseNav = this.$refs.baseNav
      window.scrollTo({
        top: getQuoteSection.offsetTop - baseNav.clientHeight,
        behavior: 'smooth',
      })
    },
  },
  mounted() {
    this.navBarAnimtaion()
  },
}
</script>

<style>
</style>
