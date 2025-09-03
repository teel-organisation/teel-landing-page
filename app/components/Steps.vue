<script lang="ts" setup>
const steps = [
  {
    number: "01",
    title: "Start Your Payment",
    description:
      "Scan a QR code on a receipt or start a new payment in the app — solo or shared.",
  },
  {
    number: "02",
    title: "Review & Confirm",
    description:
      "Check the bill details, set how you want to split it (or don't), and add your card.",
  },
  {
    number: "03",
    title: "Pay with Teel",
    description:
      "Settle instantly. If it's shared, everyone pays their part — no reminders needed.",
  },
  {
    number: "04",
    title: "Track and Store All Payments",
    description:
      "See your transaction history, export for records, and stay in control.",
  },
];

// If the boolean is true, the marquee will be static. If false, it will scroll.
const isStatic = ref(true);

const marqueeItems = [
  "Split with friends",
  "Super fast",
  "Secured",
  "Easy to use",
  "Teel or Greel",
  "Hangouts with friends",
  "Togetherness",
  "Creator friendly"
];
</script>

<template>
  <div class="min-h-screen relative pt-20">
    <div
      class="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-centers justify-between gap-12"
    >
      <div class="lg:w-[40%] w-full flex justify-center">
        <div class="w-full mx-auto lg:mx-0 lg:mt-0">
          <img
            src="/hero/ellipse.png"
            class="absolute top-0 left-0 w-[20%] h-full object-cover hidden lg:block"
            alt=""
          />
          <img
            src="/hero/frame.png"
            class="relative z-10 w-[calc(100%-50px)] h-[calc(100%-50px)] object-contain"
          />
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <h1 class="text-4xl font-bold font-cab mb-12 lg:text-[50px]">
          It takes just 1 minute
        </h1>

        <div class="font-cab">
          <div class="flex" v-for="(step, index) in steps" :key="step.number">
            <div class="mr-6 flex flex-col items-center">
              <div
                class="w-12 text-black flex items-center justify-center font-extrabold text-2xl"
              >
                {{ step.number }}
              </div>
              <div
                v-if="index < steps.length - 1"
                class="h-28 w-[3px] bg-black mt-2"
              ></div>
            </div>
            <div>
              <h3 class="font-extrabold text-2xl lg:text-[30px] mb-2">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 font-inter max-w-md">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 relative flex justify-center lg:justify-start"> 
          <img
            src="/hero/arrow.svg"
            class="absolute hidden lg:block -translate-x-[130%] -translate-y-[60%] top-0 left-0 object-cover w-20 h-auto" 
            alt="Arrow pointing to button"
          />
          <button
            @click="navigateTo('/#hero')"
            class="bg-black text-white px-9 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-base" 
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="isStatic"
      class="bg-[#00B69E] overflow-hidden font-cab font-bold text-[#1B2025] py-5 transform rotate-2 mt-12 flex flex-wrap justify-center"
    >
      <template v-for="(item, index) in marqueeItems" :key="index">
        <span class="mx-4">{{ item }}</span>
        <span v-if="index < marqueeItems.length - 1" class="mx-4">•</span>
      </template>
    </div>
    
    <Vue3Marquee
      v-else
      class="bg-[#00B69E] overflow-y-hidden font-cab font-bold text-[#1B2025] py-5 transform rotate-2 mt-12"
    >
      <template v-for="(item, index) in marqueeItems" :key="index">
        <span class="mx-4">{{ item }}</span>
        <span class="mx-4">•</span>
      </template>
    </Vue3Marquee>
  </div>
</template>