/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Semantic color system
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Main brand orange (orange-500)
          600: '#ea580c', // Hover state (orange-600)
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af', // Muted text (gray-400)
          500: '#6b7280',
          600: '#4b5563', // Secondary text (gray-600)
          700: '#374151', // Primary text (gray-700)
          800: '#1f2937', // Dark text/headings (gray-800)
          900: '#111827',
          950: '#030712',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2', // Light accent (orange-100 equivalent)
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        }
      },
      // Custom spacing for consistent section padding
      spacing: {
        'section': '4rem', // 64px - py-16
        'container-sm': '3rem', // 48px - py-12
      },
      // Custom transition durations
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      // Custom shadows for consistent card styling
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}

