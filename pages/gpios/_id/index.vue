<template>
  <div>
    <h1>GPIO {{ $route.params.id }}</h1>
    <nuxt-link to="/gpios">back to GPIOS</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
