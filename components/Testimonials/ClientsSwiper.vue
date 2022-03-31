<template>
  <div class="clients-swiper mt-5">
    <swiper :options="options">
      <swiper-slide v-for="i in 6" :key="i">
        <clients-card />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import ClientsCard from './ClientsCard.vue'
export default {
  components: { ClientsCard },
  data() {
    return {
      options: {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          767: {
            slidesPerView: 2,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss">
.clients-swiper {
  .swiper-container {
    padding: 40px 0 !important;
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0px;
      .swiper-pagination-bullet {
        transition: 250ms linear;
        border-radius: 10px;
        background: theme('colors.muted');
        opacity: 0.7;
        &.swiper-pagination-bullet-active {
          transition: 250ms linear;
          width: 20px;
          height: 7px;
          background: theme('colors.primary');
        }
      }
    }
  }
}
</style>
