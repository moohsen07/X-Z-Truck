<template>
  <section class="statistics mt-20">
    <div class="container">
      <div class="counter-area grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          class="
            counter-item
            py-6
            text-center
            border border-solid border-primary
            rounded-md
            hover:bg-primary hover:text-white
            transition
            duration-500
          "
          v-for="(item, i) in items"
          :key="i"
        >
          <div class="item-num text-6xl text-primary font-bold">
            {{ item.num }}
          </div>
          <div class="item-name text-lg font-semibold">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Vehicles',
          num: 99,
        },
        {
          name: 'Active Customers',
          num: 420,
        },
        {
          name: 'Team Members',
          num: 107,
        },
        {
          name: 'Experince Years',
          num: 19,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.counter-item {
  &:hover {
    .item-num {
      transition: 500ms ease-in-out;
      color: white;
    }
  }
}
</style>
