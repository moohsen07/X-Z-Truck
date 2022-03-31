<template>
  <div
    class="
      testimonials
      mt-20
      relative
      flex
      justify-center
      items-center
      bg-top bg-cover
    "
  >
    <div class="container">
      <div class="content text-center relative">
        <span class="text-sm text-primary">Clients Words</span>
        <h3 class="text-2xl text-white sm:text-4xl font-bold">
          What Our Client Say
        </h3>

        <clients-swiper />
      </div>
    </div>
  </div>
</template>

<script>
import ClientsSwiper from './ClientsSwiper.vue'
export default {
  components: { ClientsSwiper },
}
</script>

<style lang="scss">
.testimonials {
  height: 90vh;
  background-image: url('~/assets/imgs/testimonial-bg.jpg');
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 0;
  }
}
</style>
