<template>
  <div
    class="
      client-card
      bg-white
      rounded-md
      flex flex-col
      justify-center
      items-center
      p-8
      hover:bg-primary hover:text-white
      transition
      duration-500
    "
  >
    <div
      class="
        quote-icon
        bg-primary
        text-white
        p-1
        rounded-full
        text-5xl
        transition
        duration-500
      "
    >
      <i class="las la-quote-right"></i>
    </div>
    <div class="client-opinion my-8">
      <p class="text-sm">
        <q
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quae cupiditate hic quia voluptatibus quidem placeat nemo quam
          possimus? Esse quaerat inventore ipsum quia fuga veniam odit, omnis
          quas distinctio.</q
        >
      </p>
    </div>

    <div class="client flex gap-4">
      <base-img alt="client img" img="client1.png" />
      <div class="client-info">
        <div class="client-name text-primary text-lg font-bold">
          Glorria Williams
        </div>
        <div class="client-title text-left text-sm">Manger</div>
      </div>
    </div>
  </div>
</template>

<script>
import baseImg from '../baseImg.vue'
export default {
  components: { baseImg },
}
</script>

<style lang="scss">
.client-card {
  &:hover {
    .quote-icon {
      color: theme('colors.primary');
      background: white;
    }
    .client-name {
      color: white;
    }
  }
}
</style>
