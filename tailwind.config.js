module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      fontFamily: {
        'poppins': ['Poppins', 'Sans-serif']
      },
      colors: {
        'main': '#fffffe',
        'dark': '#0f0e17',
        'light': '#a7a9be',
        'primary': '#ff8906',
        'secondary': '#f25f4c',
        'tertiary': '#e53170'
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [],
}
