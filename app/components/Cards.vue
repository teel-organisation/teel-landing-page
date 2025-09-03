<script lang="ts" setup>
const cards = [
  {
    icon: "system-uicons:revert",
    title: "Universal Payment Flow",
    class: "bg-teal-500",
    desc: "From scanning a receipt to creating a payment for any expense, Teel handles every scenario in one intuitive app. Whether you're settling at a café, dividing rent, or sending a quick one‑off payment, it's all done in a few taps.",
  },
  {
    icon: "solar:dollar-minimalistic-outline",
    title: "Transparent Pricing",
    class: "bg-red-500",
    desc: "No hidden fees — ever. Teel doesn't charge you for sending, receiving, or splitting payments, so you always know exactly what you're paying. More value for you, less hassle over extra charges.",
  },
  {
    icon: "ph:shield-check-light",
    title: " Bank‑Level Security",
    class: "bg-blue-500",
    desc: "Your data is guarded at the highest standard. Teel uses end‑to‑end encryption, multi‑factor authentication, and rigorous privacy controls to ensure every transaction and piece of personal information stays completely safe.",
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
  <div class="pb-10">
    <div class="max-w-7xl mx-auto py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div>
        <h3
          class="text-3xl md:text-4xl lg:text-[50px] lg:leading-[65px] lg:tracking-[-0.91px] font-bold text-center font-cab text-[#1F2937]"
        >
          All Your Payments. <br />
          Just One App.
        </h3>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 pt-10 md:pt-16 lg:pt-20"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="bg-white px-6 md:px-8 py-6 md:py-0 flex flex-col gap-4 border-l-2 border-black"
        >
          <Icon
            :name="card.icon"
            :class="card.class"
            class="w-8 h-8 md:w-10 md:h-10"
          />
          <h4 class="text-xl md:text-2xl font-bold font-cab text-[#1F2937]">
            {{ card.title }}
          </h4>
          <p class="text-[#4B5563] text-sm md:text-base font-inter">
            {{ card.desc }}
          </p>
        </div>
      </div>
    </div>
    
    <div 
      v-if="isStatic"
      class="bg-[#E6512F] text-[#1B2025] font-cab font-bold overflow-hidden py-3 md:py-5 transform -rotate-2 mt-8 md:mt-12 flex flex-wrap justify-center"
    >
      <template v-for="(item, index) in marqueeItems" :key="index">
        <span class="mx-2 md:mx-4">{{ item }}</span>
        <span v-if="index < marqueeItems.length - 1" class="mx-2 md:mx-4">•</span>
      </template>
    </div>
    
    <Vue3Marquee
      v-else
      class="bg-[#E6512F] text-[#1B2025] font-cab font-bold overflow-y-hidden py-3 md:py-5 transform -rotate-2 mt-8 md:mt-12"
    >
      <template v-for="(item, index) in marqueeItems" :key="index">
        <span class="mx-2 md:mx-4">{{ item }}</span>
        <span class="mx-2 md:mx-4">•</span>
      </template>
    </Vue3Marquee>
  </div>
</template>