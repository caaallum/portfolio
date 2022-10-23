<template>
  <div class="wrapper">
    <Navbar />
    <AboutSection />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AboutSection from './components/AboutSection';

export default {
  name: 'App',
  components: {
    Navbar,
    AboutSection
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
