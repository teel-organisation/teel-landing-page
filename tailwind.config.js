/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",   // For App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router (if used)
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['var(--font-schibsted-grotesk)', 'system-ui', 'sans-serif'],
          'serif': ['var(--font-dm-serif-display)', 'serif'],
          'playfair': ['var(--font-playfair-display)', 'serif'],
        },
        fontSize: {
          'hero': ['70px', { lineHeight: '80px', letterSpacing: '-3%' }],
          'hero-sm': [{ letterSpacing: '-2%' }],
        },
        colors: {
          'primary': '#C4C4C4',
        },
      },
    },
    plugins: [],
  }
  