<template>
  <div>
    <HeroSection />
    <AboutSection />

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
            <span class="section-label-dot" />
            <span>Selected work</span>
          </div>
          <h2 class="section-title">A few representative projects</h2>
          <p class="section-subtitle">
            A quick sample of projects that show how I think about structure, composition, and UI details. See the full
            list on the projects page.
          </p>
        </div>

        <div class="grid grid-3">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <div class="home-projects-footer">
          <NuxtLink to="/projects" class="link">
            View all projects
            <span aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { useProjects } from '@/composables/useProjects';

const { projects } = useProjects();

const featuredProjects = computed(() => projects.value.slice(0, 3));
</script>

<style scoped>
.home-projects-footer {
  margin-top: 1.8rem;
}
</style>

