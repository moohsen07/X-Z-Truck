<template>
  <div class="input-wrapper relative mb-5">
    <input
      v-bind="$attrs"
      :value="value"
      @input="updateValue($event.target.value)"
      :type="type"
      :placeholder="placeholder"
      class=""
    />
    <i
      class="
        input-icon
        las
        text-xl
        absolute
        top-1/2
        left-3
        -translate-y-1/2
        transform-gpu
        text-gray-400
        transition
        duration-500
      "
      :class="icon"
    ></i>
  </div>
</template>

<script>
export default {
  props: ['value', 'icon', 'type', 'placeholder'],
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss">
.input-wrapper {
  input:focus {
    ~ {
      .input-icon {
        color: theme('colors.primary');
      }
    }
  }
}
</style>
