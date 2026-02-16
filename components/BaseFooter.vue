<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <div class="footer-brand">
          <span class="footer-mark" />
          <div>
            <p class="footer-title">Beata</p>
            <p class="footer-subtitle">Turning coffee and ideas into beautiful code.</p>
          </div>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-links">
          <NuxtLink to="/projects" class="footer-link">Projects</NuxtLink>
          <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
        </div>
        <p class="footer-meta">
          <span>&copy; {{ new Date().getFullYear() }} Beata.</span>
          <span class="dot">·</span>
          <span>Nuxt 3 · Vue 3</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(148, 163, 184, 0.25);
  background: radial-gradient(circle at top, rgba(56, 189, 248, 0.06), transparent 60%),
    rgba(15, 23, 42, 0.98);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  gap: 1.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.footer-mark {
  width: 30px;
  height: 30px;
  border-radius: 0.85rem;
  background: conic-gradient(from 140deg, #38bdf8, #818cf8, #38bdf8);
  opacity: 0.85;
}

.footer-title {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
}

.footer-subtitle {
  margin: 0.1rem 0 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.footer-right {
  text-align: right;
}

.footer-links {
  display: flex;
  justify-content: flex-end;
  gap: 0.85rem;
  margin-bottom: 0.3rem;
}

.footer-link {
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.footer-link:hover {
  color: var(--color-text);
}

.footer-meta {
  margin: 0;
  font-size: 0.78rem;
  color: var(--color-text-muted);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
}

.dot {
  opacity: 0.7;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-right {
    text-align: left;
    width: 100%;
  }

  .footer-links {
    justify-content: flex-start;
  }

  .footer-meta {
    justify-content: flex-start;
  }
}
</style>

