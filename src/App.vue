<template>
  <v-fade-transition mode="out-in">  
    <router-view />
  </v-fade-transition>
</template>

<script>
  // Styles
  import '@/styles/overrides.sass'
  import login from "@/views/login";
  export default {
    name: 'App',
    components: {
      login,
    },
    metaInfo: {
      title: 'T-Medic',
      titleTemplate: '%s | materiale Parapharm ',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>
