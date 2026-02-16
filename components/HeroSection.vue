<template>
  <section class="section">
    <div class="container">
      <div class="surface-card hero-card">
        <div class="surface-card-inner hero-inner grid grid-2">
          <div class="hero-copy">
            <div class="section-label">
              <span class="section-label-dot" />
              <span>Beata</span>
              <span>·</span>
              <span>Frontend Developer</span>
            </div>

            <h1 class="hero-title">
              Hi! I'm Beata.
              <span class="hero-highlight">I craft responsive, visually engaging web experiences.</span>
            </h1>

            <p class="hero-subtitle">
              I love intuitive UI and clean code. Whether it’s building a productivity app or designing a portfolio
              site, I thrive on transforming creative ideas into interactive reality.
            </p>

            <div class="hero-actions">
              <NuxtLink to="/projects" class="btn">
                View projects
                <span aria-hidden="true">↗</span>
              </NuxtLink>

              <NuxtLink to="/contact" class="btn btn-ghost">
                Contact
              </NuxtLink>
            </div>

            <div class="hero-meta">
              <div class="pill">
                <span class="pill-dot" />
                <span>Frontend enthusiast · Bookworm · Lifelong learner</span>
              </div>
              <div class="chip-row">
                <span class="chip chip-strong">React</span>
                <span class="chip">Vue 3</span>
                <span class="chip">Nuxt 3</span>
                <span class="chip">Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div class="hero-panel">
            <div class="hero-panel-header">
              <span class="badge badge-accent">Snapshot</span>
              <span class="hero-panel-kicker">What I focus on</span>
            </div>

            <ul class="stacked-list">
              <li class="stacked-list-item">
                <div>
                  <div class="stacked-list-item-label">Approach</div>
                  <strong>Structure first, details always</strong>
                </div>
                <span>Clean architecture with reusable building blocks.</span>
              </li>
              <li class="stacked-list-item">
                <div>
                  <div class="stacked-list-item-label">Specialty</div>
                  <strong>Design systems & layouts</strong>
                </div>
                <span>Scalable components that stay easy to work with.</span>
              </li>
              <li class="stacked-list-item">
                <div>
                  <div class="stacked-list-item-label">Mindset</div>
                  <strong>Practical, production-minded</strong>
                </div>
                <span>Simple solutions that ship and can be maintained.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-card {
  margin-top: 2rem;
}

.hero-inner {
  padding: 2.2rem 2rem 2.4rem;
  gap: 2rem;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 2.9rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0.8rem 0 0.3rem;
}

.hero-highlight {
  display: inline-block;
  background: linear-gradient(120deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  margin: 0;
  font-size: 0.98rem;
  color: var(--color-text-muted);
  max-width: 34rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.6rem;
}

.hero-panel {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 1rem;
  padding: 1.3rem 1.2rem;
  background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.98));
  border: 1px solid rgba(148, 163, 184, 0.6);
  box-shadow: var(--shadow-subtle);
}

.hero-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.hero-panel-kicker {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .hero-inner {
    padding: 1.6rem 1.4rem 1.8rem;
  }

  .hero-panel {
    order: -1;
  }
}
</style>

