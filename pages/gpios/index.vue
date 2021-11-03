<template>
  <div>
    <Gpios :gpios="loadedGpios" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IGpios from '~/types/IGpios'
import { PromiseResolve, PromiseReject } from '~/types/Promise'

export default Vue.extend({
  asyncData(context): Promise<void|IGpios|undefined> {
    return new Promise(
      (resolve: PromiseResolve<IGpios>, reject: PromiseReject): void => {
      const error = null;
      if(error)
        reject(error)
      else
        resolve({ 
          loadedGpios: [{
            id: '1',
            label: 'GPIO 1',
            gpio: '1',
            bcm: '11'
          },
          {
            id: '2',
            label: 'GPIO 2',
            gpio: '2',
            bcm: '22'
          }
          ]
        })

    }).then(
      (data: IGpios | undefined): IGpios | undefined => data
    ).catch(
      (e: Error): void => context.error(e)
    );
  }
})
</script>

<style scoped>
</style>