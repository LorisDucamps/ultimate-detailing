<template>
    <nav>
      <ul>
        <li v-for="item in navigation" :key="item.id">
          <a :href="item.link">{{ item.title }}</a>
          <!-- Si cet élément a des sous-liens, les afficher -->
          <ul v-if="item.sublinks.length" class="bg-blue-400">
            <li v-for="subLink in item.sublinks" :key="subLink.id">
              <a :href="getFullUrl(item.link, subLink.link)">{{ subLink.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { fetchNavigation } from '~/services/navigation.js';
  
  export default {
    data() {
      return {
        navigation: [],
      };
    },
    async mounted() {
      const data = await fetchNavigation();
      if (data) {
        this.navigation = data.data;
      }
    },
    methods: {
    getFullUrl(parentUrl, subLinkUrl) {
      // Construire l'URL complète du sous-lien
      return `${parentUrl}${subLinkUrl}`;
    }
  }
  };
  </script>
  