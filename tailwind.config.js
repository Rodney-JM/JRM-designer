/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
        palanquin:['Palanquin', 'sans-serif']
      },colors:{
        preto:'#012030',  
        violeta_escuro:'#25064C',
        violeta_mescuro:'#36175E',
        violeta:'#553285',
        violeta_claro1:'#7B52AB',
        violeta_claro2:'#9768D1',
        cor_textos:'#cbc2d6'
      },
      backgroundImage:{
        tinta: "url('../src/assets/images/tinta-bg')"
      }
    },
  },
  plugins: [],
}

