module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('src/Components/Images/raminta_cho.jpg')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      }),

      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,0.5)',
      }

    },
  },
  variants: {},
  plugins: [],
}
