<template>
  <header class="navbar">
    <div class="navbar-inner container">
      <NuxtLink to="/" class="navbar-brand">
        <span class="navbar-brand-mark" />
        <div class="navbar-brand-text">
          <span class="navbar-brand-title">Your Name</span>
          <span class="navbar-brand-subtitle">Frontend Developer</span>
        </div>
      </NuxtLink>

      <nav class="navbar-nav" aria-label="Main navigation">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="navbar-link"
          exact-active-class="navbar-link--active"
        >
          <span class="navbar-link-label">{{ item.label }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(18px);
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.82));
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
}

.navbar-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar-brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 0.9rem;
  background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.9), rgba(37, 99, 235, 0.9));
  box-shadow: 0 14px 30px rgba(56, 189, 248, 0.5);
  position: relative;
}

.navbar-brand-mark::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: inherit;
  border: 2px solid rgba(15, 23, 42, 0.85);
}

.navbar-brand-text {
  display: flex;
  flex-direction: column;
}

.navbar-brand-title {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.navbar-brand-subtitle {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.navbar-link {
  position: relative;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  transition: color 0.15s ease, background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.navbar-link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at top, rgba(56, 189, 248, 0.3), transparent 75%);
  opacity: 0;
  transition: opacity 0.15s ease;
}

.navbar-link-label {
  position: relative;
  z-index: 1;
}

.navbar-link:hover {
  color: var(--color-text);
  background: rgba(15, 23, 42, 0.9);
}

.navbar-link:hover::after {
  opacity: 1;
}

.navbar-link--active {
  color: #e0f2fe;
  background: rgba(56, 189, 248, 0.14);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.35);
}

.navbar-link--active::after {
  opacity: 1;
}

@media (max-width: 640px) {
  .navbar-inner {
    padding-inline: 0.75rem;
  }

  .navbar-nav {
    gap: 0.2rem;
  }

  .navbar-link {
    padding-inline: 0.7rem;
    font-size: 0.8rem;
  }
}
</style>

