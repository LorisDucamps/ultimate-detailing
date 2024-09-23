<template>
    <div>
      <h1>Blog</h1>
      <div v-if="articles.length">
        <div v-for="article in articles" :key="article.id">
          <p>{{ article.description }}</p>
        </div>
      </div>
      <div v-else>
        <p>Aucun article trouvé.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig()
  
  // Fetch the articles from Strapi using useFetch
  const { data, pending, error } = await useFetch(`${config.public.strapiBaseUrl}/api/articles`)
  const articles = computed(() => data.value ? data.value.data : [])



  </script>