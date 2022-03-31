<template>
  <button
    class="
      border-solid border-2 border-primary
      py-4
      rounded-br-xl
      uppercase
      transition
      duration-500
    "
    :class="btnClasses"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    flat: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    btnClasses() {
      if (this.flat) {
        return 'bg-transparent text-primary hover:bg-primary hover:text-white'
      }
      return 'bg-primary text-white hover:bg-transparent hover:text-primary '
    },
  },
}
</script>

<style>
</style>
