<template>
  <section class="section">
    <div class="container">
      <header class="section-header">
        <div class="section-label">
          <span class="section-label-dot" />
          <span>Contact</span>
          <span>·</span>
          <span>Say hello</span>
        </div>
        <h1 class="section-title">Tell me about your idea or project</h1>
        <p class="section-subtitle">
          Whether it’s a productivity app, a portfolio site, or something completely new, I’d love to hear what you’re
          building and how I can help.
        </p>
      </header>

      <div class="grid grid-2 contact-grid">
        <div>
          <div class="surface-card">
            <div class="surface-card-inner contact-card-inner">
              <form class="form-grid" @submit.prevent="onSubmit">
                <div class="form-grid form-grid-2">
                  <div>
                    <label class="field-label">
                      <span>Name</span>
                      <span class="text-xs muted">Required</span>
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      autocomplete="name"
                      class="input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label class="field-label">
                      <span>Email</span>
                      <span class="text-xs muted">Required</span>
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      name="email"
                      autocomplete="email"
                      class="input"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label class="field-label">
                    <span>How can I help?</span>
                    <span class="text-xs muted">A few details are helpful</span>
                  </label>
                  <textarea
                    v-model="form.message"
                    name="message"
                    class="textarea"
                    placeholder="Share a bit about your project, timelines, or what you’re exploring."
                  />
                </div>

                <div class="contact-footer">
                  <button
                    type="submit"
                    class="btn"
                    :disabled="!canSubmit"
                  >
                    <span v-if="!isSubmitting">Send message</span>
                    <span v-else>Sending…</span>
                  </button>
                  <p class="contact-hint text-xs muted">
                    This form is UI‑only in this demo. In production, this would send an email or create a ticket.
                  </p>
                </div>

                <p
                  v-if="submitted"
                  class="contact-success text-sm"
                >
                  Thanks for reaching out. Your message has been recorded in this demo state. In a real project, this is
                  where we’d confirm that your message has been sent.
                </p>
              </form>
            </div>
          </div>
        </div>

        <aside class="contact-aside">
          <div class="surface-card">
            <div class="surface-card-inner contact-aside-inner">
              <h2 class="contact-aside-heading">What to include</h2>
              <ul class="project-detail-list">
                <li>A quick summary of your product, team, or idea</li>
                <li>What you’re hoping to build or improve</li>
                <li>Any timelines, constraints, or context</li>
              </ul>

              <hr class="divider" />

              <p class="text-xs muted">Prefer email?</p>
              <a href="mailto:batatefera7@gmail.com" class="link">
                batatefera7@gmail.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm';

const { form, isSubmitting, submitted, canSubmit, submit } = useContactForm();

const onSubmit = async () => {
  await submit();
};
</script>

<style scoped>
.contact-grid {
  gap: 1.8rem;
}

.contact-card-inner {
  padding: 1.8rem 1.5rem 2rem;
}

.contact-aside-inner {
  padding: 1.7rem 1.6rem 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.contact-aside-heading {
  margin: 0;
  font-size: 1rem;
}

.contact-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-hint {
  margin: 0;
}

.contact-success {
  margin: 0.4rem 0 0;
  color: #bbf7d0;
}

@media (min-width: 800px) {
  .contact-footer {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 900px) {
  .contact-card-inner {
    padding-inline: 1.3rem;
  }

  .contact-aside-inner {
    padding-inline: 1.3rem;
  }
}
</style>

