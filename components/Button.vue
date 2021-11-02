<template>
  <nuxt-link
    class="
      flex
      m-2
      p-2
      justify-center
      focus:outline-none
      rounded-md
      shadow-lg
      text-white
      bg-blue
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