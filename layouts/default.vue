<template>
  <div class="relative">
    <Header />
    <div
      class="
        flex flex-column flex-wrap
        justify-center
        items-center
        content-center
        m-4
        p-2
        bg-gray-300
        rounded-lg
        shadow-lg
      "
    >
      <nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: "Roboto Mono", monospace;
}
body {
  background-color: #333;
}
</style>