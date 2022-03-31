<template>
  <div
    class="
      banner
      pb-5
      md:pb-0
      flex
      items-end
      relative
      md:h-screen md:items-center
      bg-center bg-cover bg-fixed
    "
  >
    <div class="container">
      <div
        class="
          flex flex-wrap
          md:flex-nowrap
          items-center
          mt-10
          md:mt-24
          justify-center
          md:justify-between
          gap-y-4
        "
      >
        <hero />
        <quote-form />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue'
import QuoteForm from './QuoteForm.vue'
export default {
  components: { Hero, QuoteForm },
}
</script>

<style lang="scss">
.banner {
  background-image: url('~/assets/imgs/shipping_bg.jpg');
  @media (max-width: 767px) {
    height: 130vh;
  }
  @media (max-height: 600px) {
    height: 140vh;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .request-quote {
    clip-path: polygon(84% 0, 100% 12.8%, 100% 100%, 0 100%, 0 0);
  }
}
</style>
