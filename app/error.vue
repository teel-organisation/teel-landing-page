<template>
  <Navbar />
  <div class="relative z-10 max-w-7xl mx-auto min-h-[70vh]">
    <div class="mt-20 flex justify-between py-44">
      <div class="pr-5 border-r-4 w-[30%] lg:pl-14">
        <img src="/error/blob.png" class="w-80" alt="" />
      </div>
      <div class="w-[70%] px-5 space-y-10 pl-16">
        <h2
          class="text-4xl lg:text-[52px] lg:leading-[100%] font-bold font-open text-[#000000DE] mt-10"
        >
          This page could not be found
        </h2>
        <p
          class="text-[#0000008A] mt-4 leading-relaxed text-lg lg:text-[28px] lg:leading-[56px] font-open tracking-wider"
        >
          You can either stay and chill here, or go back to the beginning.
        </p>
        <button
          @click="navigateTo('/')"
          class="uppercase bg-[#75A3A8] px-6 py-3 rounded-full text-white text-[26px] font-open lg:w-[260px]"
        >
          Back to home
        </button>
      </div>
    </div>
  </div>
  <img
    src="/error/glow.png"
    class="absolute right-0 top-0 w-[40%] -z-10"
    alt=""
  />
  <Footer />
</template>
