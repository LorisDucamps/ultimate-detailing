export default {
  // Définir le mode du projet (server-side rendering ou statique)
  // ou 'server' si vous avez besoin de SSR
  target: 'server',

  // Metadonnées pour les balises head de chaque page
  head: {
    title: 'Ultimate Detailing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Votre site de detailing automobile ultime' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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

  // Configuration du serveur
  server: {
    port: 3000, // Définit le port du serveur
    host: '0.0.0.0', // Définit l'hôte du serveur
  },

  // Environnement personnalisée
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  compatibilityDate: '2024-09-19',
  devtools: { enabled: true }
};