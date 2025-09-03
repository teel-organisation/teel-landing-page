<template>
  <header class="pt-8 w-full flex justify-center px-4 sm:px-8">
    <nav
      id="navbar"
      class="fixed group z-20 w-full max-w-screen-xl mx-auto px-6 sm:px-10"
      :data-state="isMenuOpen ? 'active' : ''"
    >
      <div class="w-full px-4 sm:px-6 rounded-full bg-white">
        <div
          class="flex items-center justify-between py-3 lg:py-4"
        >
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/logo.png" class="h-7 sm:h-6" />
          </NuxtLink>

          <button
            @click="scrollToWaitlist"
            class="bg-black text-white px-4 py-2 rounded-full text-[0.95rem] whitespace-nowrap"
          >
            Join Waitlist 
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false);

const scrollToWaitlist = () => {
  // First check if we're on the homepage
  if (window.location.pathname !== '/') {
    // If not on homepage, navigate to homepage with a hash
    window.location.href = '/#hero';
    return;
  }
  
  // If already on homepage, scroll to the hero section
  const heroElement = document.getElementById('hero');
  if (heroElement) {
    // Scroll to the top of the hero section
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Focus on the input field after scrolling
    setTimeout(() => {
      const emailInput = document.querySelector('#waitlist-input input[type="email"]');
      if (emailInput) {
        emailInput.focus();
      }
    }, 800); // Small delay to ensure smooth scroll completes
  }
};
</script>