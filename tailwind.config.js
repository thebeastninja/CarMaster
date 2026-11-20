/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#07080a', 900: '#0c0d10', 850: '#111317', 800: '#16181d', 700: '#1f2229', 600: '#2a2e37', 500: '#3a3f4b' },
        racing: { 300: '#ff8a65', 400: '#ff6a3d', 500: '#ff4d1f', 600: '#e63a10', 700: '#b72c0a' },
        amberx: { 400: '#ffb547', 500: '#ff9f1c' },
      },
      fontFamily: {
        display: ['"Rajdhani"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255,77,31,0.55)',
        card: '0 10px 30px -12px rgba(0,0,0,0.7)',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(12px)' }, '100%': { opacity: 1, transform: 'none' } },
        shine: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        flow: { to: { strokeDashoffset: '-40' } },
        pop: { '0%': { transform: 'scale(.6)', opacity: 0 }, '70%': { transform: 'scale(1.08)' }, '100%': { transform: 'scale(1)', opacity: 1 } },
      },
      animation: {
        fadeUp: 'fadeUp .5s ease both',
        shine: 'shine 3s linear infinite',
        flow: 'flow 0.8s linear infinite',
        pop: 'pop .45s ease both',
      },
    },
  },
  plugins: [],
}
