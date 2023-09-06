/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        flashWhite: '#f4f4f6',
        platinum: '#e6e6e9',
        platinumLight: '#f4f4f5',
        timberWolf: '#d4d4d8',
        taupe: '#9999a1',
        silver: '#d6d6d6',
        dim: '#66666e',
        battleGray: '#858585',
        french: '#b5b5ba',
        night: '#141414',
        jet: '#292929',
        jetLight: '#333333',
        jetGray: '#6d6d74',
        richBlack: '#2e2e2e',
        eerieBlack: '#1f1f1f',
        onyx: '#5b5b5b',
        lightGray: '#EEEEEE',
        navyBlue: '#04283c',
        teal: '#64CCC5',
        lightTeal: '#20d6ae',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #1f1f1f',
        cardLight: '0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        // about:
        //   'linear-gradient(180deg, rgba(23, 107, 135, 1) 20%, rgb(5, 59, 80, 1) 100%)',
        // experience:
        //   "linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        // experienceLight:
        //   'linear-gradient(137deg, rgba(23, 107, 135, 1) 20%, rgba(5,59,80,0.95) 60%)',
        // hero: 'linear-gradient(135deg, rgba(5, 59, 80, 1) 35%, rgba(100, 204, 197, 0.55) 90%)',
        // 'hero-mobile':
        //   'linear-gradient(137deg, rgba(5, 59, 80, 1) 35%, rgba(100, 204, 197, 0.55) 90%)',
        // tech: "linear-gradient(180deg, rgba(5, 59, 80, 1) 10%, rgba(100, 204, 197, 0.55) 100%)",
        // project: "linear-gradient(180deg, rgba(100, 204, 197, 0.55) 40%, rgba(5, 59, 80, 1) 60%)",
      
        
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
