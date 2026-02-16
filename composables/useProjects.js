export const useProjects = () => {
  const projects = ref([
    {
      id: 'nuxt-portfolio',
      title: 'Nuxt 3 Portfolio',
      subtitle: 'Clean, multi-page personal portfolio',
      year: '2025',
      role: 'Design & Development',
      type: 'Personal project',
      summary:
        'A fast, content-driven portfolio built with Nuxt 3 and Vue 3, focusing on clean structure, reusable components, and performance.',
      description:
        'This portfolio showcases a modular Nuxt 3 architecture with layouts, composables, and reusable UI components. It is designed to be easy to extend as new projects or content are added, while keeping a small and maintainable codebase.',
      responsibilities: [
        'Architecture & folder structure',
        'Responsive layout & theming',
        'Reusable components & composables',
        'Accessibility and semantics'
      ],
      techStack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Composition API', 'CSS'],
      highlights: [
        'Multi-page routing with dynamic project detail view',
        'Shared layouts and navigation across pages',
        'Composable-based data and logic separation'
      ],
      links: {
        site: '#',
        repo: '#'
      }
    },
    {
      id: 'dashboard-kit',
      title: 'Analytics Dashboard Kit',
      subtitle: 'Reusable dashboard UI system',
      year: '2024',
      role: 'Frontend Engineer',
      type: 'Concept',
      summary:
        'A concept dashboard built as a component kit with cards, filters, and data visualizations designed for reuse across products.',
      description:
        'The project explores a scalable way to build dashboards with a focus on layout primitives, card systems, and configurable panels. While data is mocked, the architecture is ready to be wired to real APIs.',
      responsibilities: [
        'Dashboard layout & grid system',
        'Card component design',
        'State-driven filters and views'
      ],
      techStack: ['Vue 3', 'Nuxt 3', 'Charting library (concept)', 'CSS Grid'],
      highlights: [
        'Composable-driven filters and query state',
        'Card-based layout that adapts across breakpoints'
      ],
      links: {
        site: '#',
        repo: '#'
      }
    },
    {
      id: 'marketing-landing',
      title: 'Product Landing Page',
      subtitle: 'Marketing site for a SaaS product',
      year: '2023',
      role: 'Frontend Developer',
      type: 'Client-style',
      summary:
        'A marketing landing page with a strong hero, feature highlights, and a simple call-to-action, optimized for conversions.',
      description:
        'This project focuses on clear messaging hierarchy, visual rhythm, and performance. The layout is structured around a bold hero, concise feature sections, and social proof.',
      responsibilities: [
        'Information architecture & layout',
        'Responsive implementation',
        'Micro-interactions and hover states'
      ],
      techStack: ['Vue 3', 'Nuxt 3', 'CSS Modules'],
      highlights: [
        'Well-structured sections with clear calls-to-action',
        'Thoughtful spacing and typography for readability'
      ],
      links: {
        site: '#',
        repo: '#'
      }
    }
  ]);

  const getProjectById = (id) => {
    if (!id) return undefined;
    return projects.value.find((project) => project.id === String(id));
  };

  return {
    projects,
    getProjectById
  };
};

