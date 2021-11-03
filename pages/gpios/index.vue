<template>
  <div>
    <Gpios :gpios="loadedGpios" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IGpios from '~/types/IGpios'

export default Vue.extend({
  computed: {
    loadedGpios(): IGpios {
      return this.$store.getters.loadedGpios
    }
  }
})
</script>

<style scoped>
</style>