/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fbfaf7',
        linen: '#eee6da',
        taupe: '#9a8f82',
        charcoal: '#171512',
        graphite: '#2d2a25',
        champagne: '#c7ad8b',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 21, 18, 0.08)',
      },
      backgroundImage: {
        'soft-noise':
          'radial-gradient(circle at top left, rgba(199,173,139,0.18), transparent 35%), linear-gradient(135deg, #fbfaf7 0%, #f1ebe2 100%)',
      },
    },
  },
  plugins: [],
}
