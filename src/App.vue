<template>
  <div class="flex flex-column">
    <div class="mb-2">
      <Toolbar>
        <template #start>
          <Button label="Callum Speirs" class="p-button-text" />
          <Button label="About" class="p-button-text" />
          <Button label="Journey" class="p-button-text" />
        </template>
        <template #end>
          <Button class="github p-0" aria-label="Github">
                <i class="pi pi-github px-2"></i>
                <span class="px-3">Github</span>
            </Button>
          <Button icon="pi pi-gitlab" class="p-button-rounded p-button-text" />
        </template>
      </Toolbar>
    </div>
    <div class="mb-2">
      <HeroSection />
    </div>

    <ScrollTop />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';

export default {
  components: {
    HeroSection
  }
}
</script>

<style lang="scss">

</style>
