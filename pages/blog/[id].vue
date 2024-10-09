<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
  </div>
  <div v-else>
    Chargement...
  </div>
</template>

<script setup>
import { useFetch, useSeoMeta } from 'nuxt/app';
import { useRoute } from 'vue-router';


const route = useRoute()

const {data: post} = await useFetch(() => {
    if(route.params.id) {
        return "https://jsonplaceholder.typicode.com/posts/" + route.params.id
    }
    return '/'
}, {
    lazy: true
})

useSeoMeta({
  title: () => post.value?.title
})

</script>

<style>

</style>