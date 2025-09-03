<template>
  <footer class="py-8 sm:py-12 md:py-16 px-4">
    <div class="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 font-cab">
        Social. Transactions. Easier
      </h2>

      <p
        class="text-gray-700 font-inter font-normal mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base"
      >
        Teel was built from that belief — and we're committed to creating a
        cleaner, fairer way to manage payments. We care about simplicity, speed,
        and clarity — and we build with the end-user in mind, every step of the
        way.
      </p>
      <div
        class="flex flex-wrap justify-center items-center gap-4 sm:space-x-6 mb-8 sm:mb-12 md:mb-16"
      >
        <NuxtLink
          to="/"
          class="flex items-center bg-[#F7F9FB] px-4 sm:px-5 py-2 rounded-full text-gray-700 hover:text-gray-900 text-sm sm:text-base"
        >
          <span> 👀 Homepage</span>
        </NuxtLink>
        <NuxtLink
          to="/contact-us"
          class="flex items-center bg-[#F7F9FB] px-4 sm:px-5 py-2 rounded-full text-gray-700 hover:text-gray-900 text-sm sm:text-base"
        >
          <span class="mr-2">👋</span>
          <span>Contact</span>
        </NuxtLink>
      </div>
    </div>

    <div
      class="max-w-6xl border-t pt-6 sm:pt-8 mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <div class="mb-4 md:mb-0">
        <div class="flex items-center">
          <img src="/logo.png" alt="Teel Logo" class="h-5 sm:h-6 w-auto" />
        </div>
      </div>

      <div class="text-gray-600 text-xs sm:text-sm mb-4 md:mb-0">
        © 2025 Teel Inc. All Rights Reserved.
      </div>

      <div class="flex space-x-4">
        <a
          href="#"
          class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span class="sr-only">Facebook</span>
          <span class="text-gray-500 flex justify-center">
            <Icon name="bx:bxl-facebook" class="text-sm sm:text-base" />
          </span>
        </a>
        <a
          href="#"
          class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span class="sr-only">LinkedIn</span>
          <span class="text-gray-500 flex justify-center">
            <Icon name="bx:bxl-linkedin" class="text-sm sm:text-base" />
          </span>
        </a>
        <a
          href="#"
          class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span class="sr-only">Twitter</span>
          <span class="text-gray-500 flex justify-center">
            <Icon name="bx:bxl-twitter" class="text-sm sm:text-base" />
          </span>
        </a>
      </div>
    </div>
  </footer>
  <div
    class="flex justify-center items-center h-40 sm:h-56 md:h-72 overflow-hidden bg-white"
  >
    <h2
      class="text-[200px] sm:text-[350px] md:text-[500px] leading-[23px] font-bold font-cab text-[#3C3C4366] translate-y-6 sm:translate-y-10 md:translate-y-14"
    >
      teel
    </h2>
  </div>
</template>
