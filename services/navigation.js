export async function fetchNavigation() {
    const config = useRuntimeConfig()
    try {
      const response = await fetch(`${config.public.strapiBaseUrl}/api/navigations?populate=sublinks`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de la navigation');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération de la navigation :', error);
      return null;
    }
  }