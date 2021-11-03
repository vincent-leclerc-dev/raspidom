<template>
  <form @submit.prevent="onSave">
    <fieldset class="flex flex-col flex-wrap justify-center items-center">
      <input
        v-model="editedGpio.label"
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
        v-model="editedGpio.gpio"
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
        v-model="editedGpio.bcm"
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
    </fieldset>
    <fieldset class="flex flex-row flex-wrap justify-between items-center">
      <button
        type="submit"
        class="
          flex
          bg-green-500
          m-2
          p-2
          justify-center
          focus:outline-none
          rounded-md
          shadow-lg
          text-white
        "
      >
        save
      </button>
      <button
        type="button"
        @click="onCancel"
        class="
          flex
          bg-red-500
          m-2
          p-2
          justify-center
          focus:outline-none
          rounded-md
          shadow-lg
          text-white
          bg-blue
        "
      >
        cancel
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
export default {
    props: {
        gpio: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedGpio: this.gpio ? { ...this.gpio } : {
                id: '',
                label: '',
                gpio: '',
                bcm: ''
            }
        }
    },
    methods:{
        onSave(): void {
            console.log(this.editedGpio)
        },
        onCancel(): void {
            this.$router.push('/admin')
        },
    }
}
</script>

<style>
</style>