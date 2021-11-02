<template>
  <nuxt-link
    class="
      flex
      m-2
      p-2
      justify-center
      bg-blue-500
      text-white
      hover:bg-blue-400
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