<template>
  <div>
    <NuxtLoadingBar />
    <VitePwaManifest />
    <HeaderComp />
    <div class="container mx-auto p-4">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
  
<script setup>
</script>
    
<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
</style>