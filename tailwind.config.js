/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        md: '900px'
      },
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '9.5': '9.5rem',
        '10': '10rem',
        '85': '85%',
        '90': '90%'
      },
      width: {
        nav: 'calc(100% - 8.4rem)'
      },
      height: {
        main: 'calc(100vh - 10rem)'
      },
      fontSize: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '2rem',
        lg: '2.8rem',
        xl: '3.4rem',
        '2xl': '5.8rem'
      },
      colors: {
        white: 'hsl(0, 0%, 98%)',
        gray: 'hsl(0, 0%, 41%)',
        almost: ' hsl(0, 0%, 8%)'
      }
    }
  },
  plugins: [],
}

