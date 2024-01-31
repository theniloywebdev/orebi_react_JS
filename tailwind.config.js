/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // CONTAINER START 
      maxWidth: {
        'container': '1600px',
      },
      // CONTAINER END
      // COLOR START 
      colors: {
        'primaryColor': '#262626',
        'secondaryColor': '#767676',
        'categoryBgColor': '#F5F5F3',
        'contentpColor': '#6D6D6D',
        'borderbColor': '#979797',
        'infobColor': '#F0F0F0',
        'btnBColor': '#2B2B2B',
      },
      // COLOR END
      // FONT FAMILY START 
      fontFamily: {
        'dmsans': ['DM Sans',],
      
      },
      // FONT FAMILY END
      // SHADOW COLOR 
      boxShadow: {
        'shadowOffBg': '0px 1px 1px 0px rgba(0, 0, 0, 0.1);',
      },
      // SHADOW COLOR 
      // FONT SIZE 
      fontSize: {
        '39': '39px',
        '49': '49px',
        
      },
      // FONT SIZE 
      // PADDING START 
      padding: {
        '124': '124px',
        '140': '140px',
        '152': '152px',
        '42': '42px',
        '86': '86px',
        '70': '70px',
      },
      // PADDING END 
      // LINEHEIGHT START 
      lineHeight: {
        '52': '52px',
      },
      // LINEHEIGHT END 
    },
  },
  plugins: [],
}

