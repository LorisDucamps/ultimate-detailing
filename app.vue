<template>
    <NuxtLoadingIndicator />
    <Header/>
    <NuxtPage />
</template>


<script setup>
useHead({
  htmlAttrs: {
    lang: 'fr',
  },
  title: 'Utimate Detailing',
  charset: 'utf-8',
  meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Guide du detailing automobile' },
        { name: 'author', content: 'Loris DUCAMPS' },
        { property: 'og:title', content: 'Ultimate Detailing' },
        { property: 'og:description', content: 'Guide du detailing automobile' },
        { property: 'og:image', content: '/image-social.jpg' },
        { property: 'og:url', content: 'https://www.ton-site.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
})
</script>