<template>
  <div>
    <select v-model="gpioSelected" @change="onGpioChange" name="gpio">
      <option value="0" disabled>Select a GPIO</option>
      <option v-for="(gpio, index) in gpios" :key="index" :value="gpio.id">
        {{ gpio.label }}
      </option>
    </select>
    <nuxt-child />
    <Button text="Back" />
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