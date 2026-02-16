<template>
  <NuxtLink :to="`/projects/${project.id}`" class="project-card">
    <article class="surface-card project-card-surface">
      <div class="surface-card-inner project-card-inner">
        <header class="project-card-header">
          <div class="project-card-title-block">
            <p class="project-card-eyebrow">
              <span class="badge">{{ project.year }}</span>
              <span class="muted text-xs">{{ project.type }}</span>
            </p>
            <h3 class="project-card-title">
              {{ project.title }}
            </h3>
            <p class="project-card-subtitle">
              {{ project.subtitle }}
            </p>
          </div>
          <div class="project-card-meta">
            <span class="chip chip-strong">{{ project.role }}</span>
          </div>
        </header>

        <p class="project-card-summary">
          {{ project.summary }}
        </p>

        <div class="project-card-footer">
          <div class="chip-row">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="chip"
            >
              {{ tech }}
            </span>
          </div>
          <span class="project-card-link">
            View details
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  type: string;
  summary: string;
  techStack: string[];
}

defineProps<{
  project: Project;
}>();
</script>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
}

.project-card-surface {
  height: 100%;
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  border-radius: 1rem;
}

.project-card-inner {
  padding: 1.4rem 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.9rem;
}

.project-card-title-block {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.project-card-eyebrow {
  margin: 0 0 0.1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.project-card-title {
  margin: 0;
  font-size: 1.02rem;
}

.project-card-subtitle {
  margin: 0;
  font-size: 0.86rem;
  color: var(--color-text-muted);
}

.project-card-meta {
  flex-shrink: 0;
}

.project-card-summary {
  margin: 0.2rem 0 0.3rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.project-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.4rem;
}

.project-card-link {
  font-size: 0.82rem;
  color: var(--color-accent);
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
}

.project-card:hover .project-card-surface {
  transform: translateY(-4px);
  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.9);
  border-color: rgba(56, 189, 248, 0.75);
}

@media (max-width: 700px) {
  .project-card-inner {
    padding-inline: 1.1rem;
  }

  .project-card-footer {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
</style>

