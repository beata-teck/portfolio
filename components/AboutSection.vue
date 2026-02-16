<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label">
          <span class="section-label-dot" />
          <span>About</span>
          <span>·</span>
          <span>Beata</span>
        </div>
        <h2 class="section-title">Blending creativity with clean, practical code</h2>
        <p class="section-subtitle">
          I love crafting seamless and visually appealing web experiences. My focus is on combining beauty with
          performance using modern tools and my own creative vision.
        </p>
      </div>

      <div class="grid grid-2 about-grid">
        <article class="about-column">
          <div class="surface-card about-card">
            <div class="surface-card-inner about-card-inner">
              <h3 class="about-heading">A bit of background</h3>
              <p class="about-text">
                I’m a frontend developer who enjoys turning ideas into responsive, visually engaging interfaces. I care
                a lot about intuitive user journeys, clear structure, and small details that make products feel polished.
              </p>
              <p class="about-text">
                I like working with modern web tools such as React, Vue, and Nuxt, and I’m always exploring new ways to
                write cleaner, more maintainable code.
              </p>

              <hr class="divider" />

              <ul class="stacked-list">
                <li class="stacked-list-item">
                  <div class="stacked-list-item-label">How I work</div>
                  <strong>Curious and detail‑oriented</strong>
                  <span>I like to understand the “why” and then design clean flows around it.</span>
                </li>
                <li class="stacked-list-item">
                  <div class="stacked-list-item-label">Outside of code</div>
                  <strong>Bookworm & lifelong learner</strong>
                  <span>Always reading, experimenting, and finding new ideas to bring into my work.</span>
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
                  <span class="chip chip-strong">React</span>
                  <span class="chip chip-strong">Vue 3</span>
                  <span class="chip">Nuxt 3</span>
                  <span class="chip">HTML & CSS</span>
                  <span class="chip">Tailwind CSS</span>
                </div>
              </div>

              <div class="about-section">
                <p class="text-xs muted">What I enjoy working on</p>
                <div class="chip-row">
                  <span class="chip">Productivity apps</span>
                  <span class="chip">Portfolios</span>
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

