<template>
  <div class="how-it-work mt-20">
    <div class="container">
      <h3 class="text-4xl font-bold text-center mb-10">How It Works</h3>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(work, i) in works"
          :key="i"
          class="work flex flex-wrap md:flex-nowrap items-center gap-5"
        >
          <div
            class="
              work-icon
              bg-primary bg-opacity-20
              p-4
              rounded-md
              transition
              duration-500
            "
          >
            <i
              :class="work.icon"
              class="la-3x text-primary transition duration-500"
            ></i>
          </div>
          <div class="work-content">
            <h5 class="text-xl font-semibold">{{ work.title }}</h5>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis soluta at qui modi ab nemo quo rem placeat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImg from './baseImg.vue'
export default {
  components: { BaseImg },
  data() {
    return {
      works: null,
    }
  },
  async fetch() {
    return (this.works = [
      {
        title: 'Enter Your Porduct',
        icon: 'las la-shipping-fast',
      },
      {
        title: 'Transparent pricing',
        icon: 'las la-credit-card',
      },
      {
        title: 'International delivery',
        icon: 'las la-handshake',
      },
    ])
  },
}
</script>

<style lang="scss">
.work {
  &:hover {
    .work-icon {
      --tw-bg-opacity: 1;
      i {
        color: #fff;
      }
    }
  }
}
</style>
