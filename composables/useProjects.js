export const useProjects = () => {
  const projects = ref([
    {
      id: 'project-1',
      title: 'Task Manager (React)',
      subtitle: 'A modern React task manager built with hooks and local storage.',
      year: '2025',
      role: 'Frontend Developer',
      type: 'Personal project',
      summary:
        'A modern React task manager that uses hooks, local storage, and a clean UI to keep daily tasks organised and easy to manage.',
      description:
        'I built this task manager to explore how far I could push a simple idea with React: from state management with hooks to thoughtful interactions and layout. The app focuses on fast input, clear lists, and a visual style that feels light but still structured.',
      responsibilities: [
        'Designed and implemented the entire frontend in React',
        'Used React hooks for task state, filtering, and UI interactions',
        'Persisted tasks using local storage so nothing is lost on refresh',
        'Crafted a responsive layout and polished hover/focus states'
      ],
      techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      highlights: [
        'Smooth task creation and completion flows with minimal friction',
        'Local storage persistence so tasks survive browser refreshes',
        'Responsive, modern UI tuned for both desktop and mobile use'
      ],
      links: {
        site: 'https://task-manager-qohl.vercel.app/',
        repo: 'https://github.com/beata-teck/Task-Manager'
      }
    },
    {
      id: 'dashboard-kit',
      title: 'Lunara Studio Web',
      subtitle: 'a concept portfolio for studio work and client projects',
      year: '2024',
      role: 'Frontend Engineer',
      type: 'Concept',
      summary:
        'A visually stunning website for Lunara Studio, showcasing their portfolio and services',
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
        site: 'https://lunara-studios.vercel.app/',
        repo: 'https://github.com/beata-teck/Lunara-Studios'
      }
    },
    {
      id: 'marketing-landing',
      title: 'Pomodoro Web App',
      subtitle: 'A simple, focused Pomodoro timer web app to boost productivity.',
      year: '2023',
      role: 'Frontend Developer',
      type: 'Client-style',
      summary:
        'A clean and focused landing page for a Pomodoro timer web app, designed to convert visitors into users.',
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
        site: 'https://promodoro-app-five.vercel.app/',
        repo: 'https://github.com/beata-teck/promodoro-app'
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

