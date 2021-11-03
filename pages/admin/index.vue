<template>
  <div>
    <section>
      <button
        @click="$router.push('/admin/new-gpio')"
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
        Create Gpio
      </button>
    </section>
    <section>
      <h1>Gpios</h1>
      <Gpios isAdmin />
    </section>
  </div>
</template>

<script>
export default {
    layout: 'admin'
}
</script>

<style>
</style>