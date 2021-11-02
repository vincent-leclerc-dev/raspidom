<template>
  <nuxt-link
    class="
        button
      flex
      m-2
      p-2
      justify-center
      focus:outline-none
      rounded-md
      shadow-lg
    "
    :to="to"
    >{{ text }}</nuxt-link
  >
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
       text: {
           type: String,
           required: true,
       },
       to: {
           type: String,
           default: '/'
       },
    }
})
</script>

<style scoped>
.button {
  background-color: #09f;
  color: #fff;
}
</style>