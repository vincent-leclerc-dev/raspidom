<template>
  <div>
    <h1 class="">GPIO {{ gpio.id }}</h1>
    {{ gpio.label }}
    {{ gpio.gpio }}
    {{ gpio.bcm}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    gpio: {
      type: Object,
      required: false
    }
  }
})
</script>

<style scoped>
</style>