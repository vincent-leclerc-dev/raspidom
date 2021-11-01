<template>
  <Gpio />
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
  validate(ctx:Context):boolean {
    return /^\d+$/.test(ctx.params.id)
  }
})
</script>

<style scoped>

</style>
