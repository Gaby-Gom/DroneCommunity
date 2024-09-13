/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorFontPrimary: '#3D5C92',
        colorFontSecondary: '#455BA0',
        colorDashoardPrimary: '#435D9C',
        colorDashoardSecondary: '#263D69',
        colorBorderHover: '#F0A04C',
        colorIcons: '#DEB778',
        buttonRegister: '#FCAF3D',
        colorInputForm: '#E3F1FC',
        colorFontInputForm: '#3D5C92',
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  },
};
