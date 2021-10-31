<template>
  <div>
    <h1>GPIOS</h1>
    <div>
    <select v-model="gpioId" @change="onLoadGpio">
      <option value="" disabled selected>Select a GPIO</option>
      <option :key="index" v-for="(n, index) in 8" :value="n">
        GPIO {{ n }}
      </option>
    </select>
    </div>
    <nuxt-link to="/">back to home</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
      data() {
    return {
      gpioId: ''
    }
  },
  methods: {
    onLoadGpio() {
      this.$router.push('/gpios/' + this.gpioId)
    }
  },
})
</script>
