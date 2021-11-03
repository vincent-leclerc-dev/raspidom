<template>
  <nuxt-link :to="gpioLink">
    <div>
        <h1 class="">{{ label }}</h1>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

interface IGpiosForm {
  gpios: {id:string, label:string}[]
}

export default Vue.extend({
  props: {
    id: {
        type: String,
        required: true
    },
    label: {
         type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
  },
  computed: {
      gpioLink() {
          return this.isAdmin ? '/admin/' + this.id : '/gpios/' + this.id
      }
  }
})
</script>

<style scoped>
</style>