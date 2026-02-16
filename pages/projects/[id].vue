<template>
  <section class="section">
    <div class="container">
      <NuxtLink to="/projects" class="back-link">
        <span aria-hidden="true">←</span>
        Back to projects
      </NuxtLink>

      <div v-if="project" class="project-detail">
        <header class="project-detail-header">
          <div class="section-label">
            <span class="section-label-dot" />
            <span>Case study</span>
            <span>·</span>
            <span>{{ project.year }}</span>
          </div>
          <h1 class="section-title">{{ project.title }}</h1>
          <p class="section-subtitle">
            {{ project.description }}
          </p>
        </header>

        <div class="grid grid-2 project-detail-grid">
          <article class="project-detail-main">
            <div class="surface-card">
              <div class="surface-card-inner project-detail-body">
                <section class="project-detail-section">
                  <h2 class="project-detail-heading">Overview</h2>
                  <p class="project-detail-text">
                    {{ project.summary }}
                  </p>
                </section>

                <section class="project-detail-section">
                  <h2 class="project-detail-heading">Responsibilities</h2>
                  <ul class="project-detail-list">
                    <li
                      v-for="item in project.responsibilities"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </section>

                <section class="project-detail-section" v-if="project.highlights?.length">
                  <h2 class="project-detail-heading">Highlights</h2>
                  <ul class="project-detail-list">
                    <li
                      v-for="item in project.highlights"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </article>

          <aside class="project-detail-aside">
            <div class="surface-card project-detail-aside-card">
              <div class="surface-card-inner project-detail-aside-inner">
                <h2 class="project-detail-heading">Project details</h2>

                <ul class="stacked-list">
                  <li class="stacked-list-item">
                    <span class="stacked-list-item-label">Year</span>
                    <strong>{{ project.year }}</strong>
                  </li>
                  <li class="stacked-list-item">
                    <span class="stacked-list-item-label">Role</span>
                    <strong>{{ project.role }}</strong>
                  </li>
                  <li class="stacked-list-item">
                    <span class="stacked-list-item-label">Type</span>
                    <strong>{{ project.type }}</strong>
                  </li>
                </ul>

                <hr class="divider" />

                <div>
                  <p class="text-xs muted">Tech stack</p>
                  <div class="chip-row">
                    <span
                      v-for="tech in project.techStack"
                      :key="tech"
                      class="chip"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <hr class="divider" />

                <div class="project-detail-links">
                  <p class="text-xs muted">Links</p>
                  <div class="project-detail-link-row">
                    <a
                      v-if="project.links?.site"
                      :href="project.links.site"
                      target="_blank"
                      rel="noreferrer"
                      class="link"
                    >
                      Live site
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      v-if="project.links?.repo"
                      :href="project.links.repo"
                      target="_blank"
                      rel="noreferrer"
                      class="link"
                    >
                      Source
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div v-else class="project-not-found">
        <div class="surface-card">
          <div class="surface-card-inner project-not-found-inner">
            <p class="badge">Project not found</p>
            <h1 class="section-title">We couldn’t find this project.</h1>
            <p class="section-subtitle">
              The project you’re looking for doesn’t exist or the URL is slightly off. You can always browse all work
              from the projects page.
            </p>
            <NuxtLink to="/projects" class="btn btn-ghost">
              Back to all projects
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from '#imports';
import { useProjects } from '@/composables/useProjects';

const route = useRoute();
const { getProjectById } = useProjects();

const project = computed(() => getProjectById(route.params.id));
</script>

<style scoped>
.project-detail {
  margin-top: 1.6rem;
}

.project-detail-grid {
  gap: 1.8rem;
}

.project-detail-main {
  min-width: 0;
}

.project-detail-body {
  padding: 1.7rem 1.5rem 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.project-detail-aside-card {
  height: 100%;
}

.project-detail-aside-inner {
  padding: 1.5rem 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-detail-heading {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

.project-detail-text {
  margin: 0;
  font-size: 0.92rem;
  color: var(--color-text-muted);
}

.project-detail-list {
  margin: 0.3rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.project-detail-list li + li {
  margin-top: 0.3rem;
}

.project-detail-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-detail-link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.project-not-found {
  margin-top: 1.8rem;
}

.project-not-found-inner {
  padding: 1.9rem 1.7rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 900px) {
  .project-detail-body {
    padding-inline: 1.3rem;
  }

  .project-detail-aside-inner {
    padding-inline: 1.3rem;
  }
}
</style>

