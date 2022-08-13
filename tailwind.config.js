module.exports = {
 content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
 theme: {
  extend: {
   colors: {
    primaryColor: '#2C1E3E',
    secondaryColor: '#858AAA',
   },
   spacing: {
    '68': '16.5rem',
    '100': '33.65rem',
   },
   width: {
    '50': '12.5rem',
   },
   fontSize: {
    base2: '17px',
   },
   fontFamily: {
    'sans': ['Inter', 'sans-serif'],
   },
   maxWidth: {
    '560': '560px',
    '650': '650px',
   },
  },
 },
};
