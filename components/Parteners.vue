<template>
  <div class="partenrs mt-5">
    <div class="container">
      <swiper :options="options">
        <swiper-slide v-for="img in 5" :key="img">
          <base-img :alt="img" :img="`partners/partner-${img}.png`" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        speed: 800,
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          767: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
        },
      },
    }
  },
}
</script>

<style>
</style>
