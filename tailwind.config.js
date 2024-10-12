/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paws-pattern': "url('/paw2.png')", // Public klasöründeki paw2.png dosyasına referans
      },
    },
  },
  plugins: [],
}
