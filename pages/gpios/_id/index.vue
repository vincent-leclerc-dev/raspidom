<template>
  <Gpio :gpio="loadedGpio" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import IGpio from '~/types/IGpio'
import { PromiseResolve, PromiseReject } from '~/types/Promise'

export default Vue.extend({
  validate(ctx:Context):boolean {
    return /^\d+$/.test(ctx.params.id)
  },
  asyncData(ctx:Context) {
    return new Promise(
      (resolve: PromiseResolve<IGpio>, reject: PromiseReject): void => {
        const gpio = {
          id: '1',
          label: 'GPIO 1',
          gpio: '1',
          bcm: '11'
        };
        const error = null;
        if (error)
          reject(error)
        else
          resolve({ 
            loadedGpio: gpio 
          })
    }).then(
      (data: IGpio | undefined): IGpio | undefined => data
    ).catch(
      (e: Error): void => ctx.error(e)
    );
  }
})
</script>

<style scoped>
</style>
