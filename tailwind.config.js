/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React 컴포넌트를 포함
    "./public/index.html",         // HTML 파일 포함
  ],
  theme: {
    extend: {
      fontFamily: {
        ribeye: ['Ribeye', 'cursive'],
      },
    },
  },
  plugins: [],
};