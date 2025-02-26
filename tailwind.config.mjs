module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Apne project ke files ko specify karein
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Open Sans"', 'sans-serif'], // Reference the font by its name
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
    screens: {
      xs: '576px', 
      sm: '640px',
      md: '768px',
      lg: '991px',
      xl: '1199px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}
