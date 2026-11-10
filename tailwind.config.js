/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        biztech: {
          navy: '#0A1E3B',
          blue: '#0052CC',
          darkBlue: '#0F2B52',
          accentBlue: '#0066FF',
          sky: '#00A3FF',
          green: '#10B981',
          lime: '#16A34A',
          brightGreen: '#22C55E',
          heroLime: '#4ADE80',
          darkBg: '#091A33',
          cardBg: '#FFFFFF',
          cardBorder: '#E2E8F0',
          textMuted: '#64748B',
          textDark: '#1E293B',
          lightBg: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
