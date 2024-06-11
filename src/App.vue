<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  name: 'App',
  components: { AppHeader, HomePage }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
