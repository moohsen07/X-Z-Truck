module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#AB161D',
        dark: '#151515',
        secondary: '#005bac',
        muted: '#ffffff99'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
