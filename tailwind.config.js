/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '60px',
      center: true,
    },
    screens: {
      main: '1440px',
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: 'rgb(var(--black) / <alpha-value>)',
      white: 'rgb(var(--white) / <alpha-value>)',
      'white-secondary': 'rgb(var(--white-secondary) / <alpha-value>)',
      grey: 'rgb(var(--grey) / <alpha-value>)',
      'blue-grey': 'rgb(var(--blue-grey) / <alpha-value>)',
      'brown-grey': 'rgb(var(--brown-grey) / <alpha-value>)',
      'dark-blue': 'rgb(var(--dark-blue) / <alpha-value>)',
      text: 'rgb(var(--text) / <alpha-value>)',
      pink: 'rgb(var(--pink) / <alpha-value>)',
      skeleton: 'rgb(var(--skeleton) / <alpha-value>)',
      'skeleton-highlight': 'rgb(var(--skeleton-highlight) / <alpha-value>)',
    },
    extend: {
      height: {
        small: '10px',
      },
      width: {
        small: '10px',
      },
      margin: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      padding: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      gap: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      minWidth: {
        base: '1440px',
      },
      borderRadius: {
        small: '5px',
        base: '10px',
        large: '20px',
      },
      cursor: {
        inherit: 'inherit',
      },
      dropShadow: {
        tooltip: ['0 4px 4px rgba(0, 0, 0, 0.15)', '0 0px 30px rgba(0, 0, 0, 0.11)'],
        pagination: ['0 7px 15px rgba(35, 36, 70, 0.19)'],
      },
      boxShadow: {
        notification: ['0px 14px 40px rgba(93, 93, 112, 0.25)'],
        tooltip: ['0 4px 4px rgba(0, 0, 0, 0.15)', '0 0px 30px rgba(0, 0, 0, 0.11)'],
      },
      fontSize: {
        h1: [
          '1.75rem',
          {
            lineHeight: '2.125rem',
            fontWeight: '700',
          },
        ],
        h2: [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '600',
          },
        ],
        h3: [
          '1.0625rem',
          {
            lineHeight: '1.3125rem',
            fontWeight: '600',
          },
        ],
        h4: ['1.0625rem', '170%'],
        p: ['0.75rem', '1.25rem'],
        h5: [
          '0.5rem',
          {
            lineHeight: '0.625rem',
            fontWeight: '700',
          },
        ],
      },
    },
  },
}
