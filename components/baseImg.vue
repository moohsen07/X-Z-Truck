<template>
  <picture>
    <source :srcset="require(`~/assets/imgs/${img}`)" />
    <img
      :src="require(`~/assets/imgs/${img}`)"
      :alt="alt"
      style="object-fit: cover"
    />
  </picture>
</template>

<script>
export default {
  props: ['img', 'alt'],
}
</script>

<style>
</style>
