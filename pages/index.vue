<template>
  <div>
    <section>
      <h1>Welcome on RasPiDom!</h1>
    </section>
    <section>
      <h2>Gpios preview</h2>
      <Gpios :gpios="loadedGpios" />
    </section>
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