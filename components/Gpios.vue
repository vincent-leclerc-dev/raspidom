 <template>
  <div>
      <GpioPreview v-for="(gpio, index) in gpios" :key="index" :is-admin="isAdmin" :id="gpio.id" :label="gpio.label"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    gpios: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>

</style>