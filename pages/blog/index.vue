<template>
    <div>
      <h1>Voici la page de Blog</h1>
      <template v-if="articles.length">
        <div v-for="article in articles" :key="article.id">
          <p>{{ article.description }}</p>
        </div>
      </template>
      <div v-else>
        <p>Aucun article trouvé.</p>
      </div>
    </div>
    <!-- <div>
      <article v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body.slice(0,100) }}</p>
        <NuxtLink class="text-red-400" :to="`/blog/${post.id}`">Lire la suite</NuxtLink>
      </article>
    </div> -->
  </template>
  
  <script setup>

const config = useRuntimeConfig()

  definePageMeta({
  title: 'Voici un super titre de page Blog'
})
  
  // const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  
  // Fetch the articles from Strapi using useFetch
  const { data, pending, error } = await useFetch(`${config.public.strapiBaseUrl}/api/articles`)
  const articles = computed(() => data.value ? data.value.data : [])

  </script>