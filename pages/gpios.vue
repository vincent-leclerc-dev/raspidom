<template>
  <div>
    <select v-model="gpioSelected" @change="onGpioChange" name="gpio">
      <option value="0" disabled>Select a GPIO</option>
      <option v-for="(gpio, index) in gpios" :key="index" :value="gpio.id">
        {{ gpio.label }}
      </option>
    </select>
    <nuxt-child />
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
      to="/"
      >back</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IGpiosForm {
  gpios: {id:number, label:string}[]
  gpioSelected: number
}

export default Vue.extend({
  data(): IGpiosForm {
    return {
      gpios: [{
          id: 1,
          label:'GPIO 1'
     },
     {
          id: 2,
          label:'GPIO 2'
     }],
      gpioSelected: 0
    }
  },
  methods: {
       onGpioChange(): void {
        this.$router.push('/gpios/'+this.gpioSelected)
       }
  }
})
</script>

<style scoped>
</style>