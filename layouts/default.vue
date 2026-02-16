<template>
  <div class="page-shell">
    <BaseNavbar />
    <main class="page-main">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
</script>

