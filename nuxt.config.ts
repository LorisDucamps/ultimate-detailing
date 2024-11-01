export default {
  // Définir le mode du projet (server-side rendering ou statique)
  // ou 'server' si vous avez besoin de SSR
  target: 'static',

  // Global CSS (chargement global de CSS)
  css: [
    // 'path/to/global/styles.css'
  ],

  // Modules pour le build (développement seulement)
  modules: ['@nuxtjs/tailwindcss'],

  // Configuration des routes statiques
  generate: {
    fallback: true // Ajoute un fallback 404 pour les déploiements statiques
  },

  // Modules personnalisés
  // Auto-importation des composants dans `components/`
  components: true,

  
  buildModules: ['@nuxtjs/google-analytics'],

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  plugins: [{ src: '~/plugins/googleAnalytics.js', mode: 'client' }],

  // Configuration du serveur
  server: {
    port: 3000, // Définit le port du serveur
    host: '0.0.0.0', // Définit l'hôte du serveur
  },

  // Environnement personnalisée
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.STRAPI_BASE_URL || 'http://localhost:1337',
    }
  },

  compatibilityDate: '2024-09-23',
  devtools: { enabled: true }
};