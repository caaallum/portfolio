<template>
<div>
  <particles-bg type="cobweb" :bg="true" />
  <full-page :options="options" ref="fullpage" id="fullpage">
    <div id="hero" class="section">
      <HeroSection />
    </div>
    <div id="about" class="section">
      <AboutSection />
    </div>
    <div id="journey" class="section">
      <JourneySection />
    </div>
    <div id="contact" class="section">
      <ContactSection />
    </div>
  </full-page>
</div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import JourneySection from '@/components/JourneySection.vue';
import ContactSection from '@/components/ContactSection.vue'
import { ParticlesBg } from "particles-bg-vue";

export default {
  data() {
    return {
      options: {
        scrollBar: false,
        navigation: true,
        slidesNavigation: true,
        controlArrows: true,
        scrollOverflow: true,
        verticalCentered: true,
      },
    }
  },
  components: {
    ParticlesBg, HeroSection, AboutSection, JourneySection, ContactSection
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Jetbrains Mono';
  src: local('Jetbrains mono'), url('./assets/jetbrains-mono.ttf') format('truetype');
}

h1, h2, h3, h4, h5, p, .p-button-label {
  font-family: 'Jetbrains Mono' !important;
}

// .fp-overflow {
//   overflow-y: unset !important;
// }

.fp-watermark {
  display: none;
}

img {
  filter: drop-shadow(0 0 0.75rem black);
  max-width: 100%;
}
</style>
