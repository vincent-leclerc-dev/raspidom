<template>
  <div>
    <h1 class="">GPIO {{ id }}</h1>
    <Button class="flex flex-row-reverse" text="+" />
    <form>
      <input
        :value="label"
        type="text"
        placeholder="label"
        class="
          border border-transparent
          rounded-md
          m-2
          p-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue-light
          focus:border-transparent
        "
      />
      <input
        :value="gpio"
        type="text"
        placeholder="gpio"
        class="
          border border-transparent
          rounded-md
          m-2
          p-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue
          focus:border-transparent
        "
      />
      <input
        :value="bcm"
        type="text"
        placeholder="bcm"
        class="
          border border-transparent
          rounded-md
          m-2
          p-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue-dark
          focus:border-transparent
        "
      />
      <Button class="flex flex-row-reverse bg-green-500" text="save" />
      <Button class="flex flex-row-reverse bg-red-500" text="cancel" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      id: this.$route.params.id,
      label: '',
      gpio: 0,
      bcm: 0
    }
  }
})
</script>

<style scoped>

</style>