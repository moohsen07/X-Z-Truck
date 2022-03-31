<template>
  <div class="request-quote relative bg-white p-5">
    <div class="text-lg font-semibold mb-5">Request a Quote</div>
    <form>
      <base-input
        v-model="from"
        icon="la-map-marker"
        type="text"
        placeholder="from"
      />
      <base-input
        v-model="to"
        icon="la-map-marker"
        type="text"
        placeholder="to"
      />
      <base-input
        v-model="date"
        icon="lar la-calendar"
        type="text"
        placeholder="date"
      />
      <base-input
        v-model="email"
        icon="la-envelope"
        type="text"
        placeholder="email"
      />
      <select class="mb-5">
        <option value="" selected>choose transport</option>
        <option value="place" v-for="(place, i) in places" :key="i">
          {{ place }}
        </option>
      </select>
      <app-btn class="w-full"> Send a request </app-btn>
    </form>
  </div>
</template>

<script>
import AppBtn from '../AppBtn.vue'
import BaseInput from '../BaseInput.vue'
export default {
  components: { BaseInput, AppBtn },
  data() {
    return {
      from: '',
      to: '',
      date: '',
      email: '',
      places: ['Mishgen', 'Texas', 'Williamosten', 'other state'],
    }
  },
}
</script>

<style>
</style>
