<script setup lang="ts">
const steps = [
  {
    title: "Recurring Group Payments",
    description:
      "Set up shared bills like rent, WiFi, or subscriptions. We'll handle reminders and fair splits — no chasing needed.",
  },
  {
    title: "Activity Feed",
    description:
      "Keep track of who paid what and when — no guessing, no drama.",
  },
  {
    title: "Smart Reminders",
    description: "We'll nudge your group (nicely) so you don't have to.",
  },
  {
    title: "Solo Payments, Sorted",
    description:
      "Paying solo? Store receipts, track your history, and manage your payments in one place — no spreadsheets required.",
  },
];
</script>
<template>
  <div class="min-h-screen relative bg-[#F4F4F4] lg:pt-4 px-4 py-8 md:py-12">
    <div class="lg:flex justify-between md:pt-12 hidden">
      <div class="w-1/2"></div>
      <div class="w-1/2">
        <h1
          class="text-3xl md:text-4xl lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.91px] font-bold font-cab pl-3 md:pl-5"
        >
          Do more with Teel.
        </h1>
      </div>
    </div>
    <div
      class="container mx-auto flex flex-col lg:flex-row lg:pt-20 justify-between gap-8 lg:gap-12"
    >
      <div class="lg:w-1/2 w-full flex justify-center">
        <div
          class="w-full max-w-sm mx-auto lg:mx-0 order-2 lg:order-1 mt-10 lg:mt-0"
        >
          <img src="/hero/do-more.png" />
        </div>
      </div>

      <div class="w-full lg:w-1/2 order-1 lg:order-2">
        <h1
          class="text-4xl lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.91px] font-bold font-cab mb-8 lg:hidden"
        >
          Do more with Teel.
        </h1>
        <div class="max-w-xl font-cab space-y-8 md:space-y-12">
          <div class="flex" v-for="(steps, index) in steps" :key="index">
            <div class="border-l border-black pl-3 md:pl-5">
              <h3
                class="font-bold text-[#1B2025] text-xl md:text-2xl lg:text-[32px] lg:leading-[31px] lg:tracking-[-0.11px] mb-1 md:mb-2"
              >
                {{ steps.title }}
              </h3>
              <p
                class="text-black mt-4 text-base lg:text-[24px] lg:leading-[140%] font-inter font-light"
              >
                {{ steps.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-x-8 my-20">
      <img src="/buttons/play.png" alt="" class="h-[50px]" />
      <img src="/buttons/apple.png" alt="" class="h-[50px]" />
    </div>
  </div>
</template>
