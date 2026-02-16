<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label">
          <span class="section-label-dot" />
          <span>About</span>
          <span>·</span>
          <span>Who I am</span>
        </div>
        <h2 class="section-title">Blending design sense with solid engineering</h2>
        <p class="section-subtitle">
          I care about structure, naming, and clear separation of concerns. My goal is to ship interfaces that feel
          calm, reliable, and easy to extend over time.
        </p>
      </div>

      <div class="grid grid-2 about-grid">
        <article class="about-column">
          <div class="surface-card about-card">
            <div class="surface-card-inner about-card-inner">
              <h3 class="about-heading">A bit of background</h3>
              <p class="about-text">
                I’ve worked across product and UI engineering, spending most of my time in modern frontend stacks. I
                enjoy shaping component APIs, building layout systems, and refining the small details that make products
                feel polished.
              </p>
              <p class="about-text">
                Recently, I’ve been focused on Nuxt 3 and Vue 3, using the Composition API and composables to keep logic
                isolated and easy to test.
              </p>

              <hr class="divider" />

              <ul class="stacked-list">
                <li class="stacked-list-item">
                  <div class="stacked-list-item-label">Focus areas</div>
                  <strong>Front‑of‑the‑frontend</strong>
                  <span>Architecture, UI patterns, and developer experience.</span>
                </li>
                <li class="stacked-list-item">
                  <div class="stacked-list-item-label">Collaboration</div>
                  <strong>Design partners</strong>
                  <span>Translating Figma into components instead of one‑off pages.</span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article class="about-column">
          <div class="surface-card about-card">
            <div class="surface-card-inner about-card-inner">
              <h3 class="about-heading">Skills at a glance</h3>

              <div class="about-section">
                <p class="text-xs muted">Core stack</p>
                <div class="chip-row">
                  <span class="chip chip-strong">Nuxt 3</span>
                  <span class="chip chip-strong">Vue 3</span>
                  <span class="chip">TypeScript</span>
                  <span class="chip">JavaScript (ESNext)</span>
                  <span class="chip">CSS</span>
                </div>
              </div>

              <div class="about-section">
                <p class="text-xs muted">What I enjoy working on</p>
                <div class="chip-row">
                  <span class="chip">Design systems</span>
                  <span class="chip">Component libraries</span>
                  <span class="chip">Marketing sites</span>
                  <span class="chip">Dashboards</span>
                </div>
              </div>

              <div class="about-section">
                <p class="text-xs muted">Principles</p>
                <ul class="stacked-list">
                  <li class="stacked-list-item">
                    <strong>Clarity over cleverness</strong>
                    <span>Prefer simple patterns the whole team understands.</span>
                  </li>
                  <li class="stacked-list-item">
                    <strong>Small, composable pieces</strong>
                    <span>Reuse logic via composables and components, not copy‑paste.</span>
                  </li>
                  <li class="stacked-list-item">
                    <strong>Production‑minded</strong>
                    <span>Think about naming, extensibility, and maintenance from day one.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-grid {
  gap: 1.6rem;
}

.about-card {
  height: 100%;
}

.about-card-inner {
  padding: 1.8rem 1.6rem 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.about-heading {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}

.about-text {
  margin: 0.1rem 0;
  font-size: 0.92rem;
  color: var(--color-text-muted);
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

@media (max-width: 900px) {
  .about-card-inner {
    padding-inline: 1.4rem;
  }
}
</style>

