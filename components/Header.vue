<template>
  <header>
    <nav class="bg-blue-500">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div
            class="
              flex-1 flex
              items-center
              justify-center
              sm:items-stretch sm:justify-start
            "
          >
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="~/assets/raspberry-pi-logo.svg"
                alt="raspberry-pi-logo"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="~/assets/raspberry-pi-logo.svg"
                alt="raspberry-pi-logo"
              />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <nuxt-link
                  to="/"
                  class="
                    bg-blue-400
                    text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  aria-current="page"
                  >Home</nuxt-link
                >
                <nuxt-link
                  to="/gpios"
                  class="
                    text-white
                    hover:bg-blue-400 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  >GPIOS</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <nuxt-link
            to="/"
            class="
              bg-blue-400
              text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/gpios"
            class="
              text-white
              hover:bg-blue-400 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >GPIOS</nuxt-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>
