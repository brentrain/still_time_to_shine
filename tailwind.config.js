/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        raleway: ['var(--font-raleway)'],
        lato: ['var(--font-lato)'],
        opensans: ['var(--font-opensans)'],
        pacifico: ['var(--font-pacifico)'],
      },
      colors: {
        primary: {
          DEFAULT: '#1D3557', // Primary text / header background
          light: '#457B9D',   // Button color / secondary headings
        },
        accent: {
          DEFAULT: '#A8DADC',  // Accent or hover color
          light: '#F1FAEE',    // Background / light sections
        },
        shine: {
          DEFAULT: '#E63946',  // Call-to-action or bold text
          light: '#F1FAEE',    // Light background
        },
        base: {
          50: '#F1FAEE',      // Background / light sections
          100: '#A8DADC',     // Accent color
          200: '#457B9D',     // Button color
          700: '#1D3557',     // Primary text
          900: '#E63946',     // Call-to-action
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1D3557',
            fontFamily: 'var(--font-lato)',
            a: {
              color: '#E63946',
              '&:hover': {
                color: '#457B9D',
              },
            },
            h1: {
              color: '#1D3557',
              fontFamily: 'var(--font-poppins)',
              fontWeight: '700',
            },
            h2: {
              color: '#457B9D',
              fontFamily: 'var(--font-raleway)',
              fontWeight: '700',
            },
            h3: {
              color: '#457B9D',
              fontFamily: 'var(--font-raleway)',
              fontWeight: '700',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 