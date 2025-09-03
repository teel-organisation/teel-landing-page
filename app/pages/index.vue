<script lang="ts" setup>
useSeoMeta({
  description: "Built for a new generation of customers, making payment management simple, social, and fast. It's fun, it's seamless. If there's a payment, just Teel it.",
  ogTitle: "Teel - Payments Simplified",
  ogDescription: "Built for a new generation of customers, making payment management simple, social, and fast. It's fun, it's seamless. If there's a payment, just Teel it.",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Teel - Payments Simplified",
  twitterDescription: "Built for a new generation of customers, making payment management simple, social, and fast. It's fun, it's seamless. If there's a payment, just Teel it.",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
  ],
});
</script>
<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <Management />
      <Steps />
      <Cards />
      <DoMore />
      <Footer />
    </main>
  </div>
</template>
