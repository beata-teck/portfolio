<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label">
          <span class="section-label-dot" />
          <span>Projects</span>
          <span>·</span>
          <span>Case studies</span>
        </div>
        <h1 class="section-title">Selected work and concepts</h1>
        <p class="section-subtitle">
          Each project is structured as a small case study. The goal is to show how I think about architecture, UX, and
          implementation decisions, not just screenshots.
        </p>
      </div>

      <div class="grid grid-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { useProjects } from '@/composables/useProjects';

const { projects } = useProjects();
</script>

