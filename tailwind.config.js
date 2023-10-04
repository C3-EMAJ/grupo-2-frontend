/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    colors: {
      'orange_agenda':'#FF6633',
      'orange':'#FDAE17',
      'high_grey':'#CDCDCD',
      'medium_grey':'#EEF1F4',
      'low_grey':'#F8F8F8',
      'white':'#FFFFFF',
      'blue_search':'#1890FF',
      'blue_enviar_arquivo':'#0F91D2',
      'alert_red':'#FD1717',
      'green_agendas':'#12BDB2',
      'black':'#000000'
    },

    extend: {
      fontFamily:{
        Montserrat : ['Montserrat', 'sans-serif']
      }
    },

  },

  plugins: [],
}

