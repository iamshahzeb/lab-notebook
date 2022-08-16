module.exports = {
 content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
 theme: {
  extend: {
   colors: {
    primary: '#2C1E3E',
    secondary: '#858AAA',
    lightGrey: '#f3f1f6',
    error: '#F57269',
    disabled: '#F0F0F0',
    bulletActive: '#514994',
    bulletActiveBg: '#cac8df',
    bullet: '#E7E4ED',
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
