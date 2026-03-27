/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff4ef',
          100: '#ffe4d5',
          200: '#ffc4a3',
          300: '#ff9966',
          400: '#ff7033',
          500: '#f15a22',
          600: '#d94410',
          700: '#b5330c',
          800: '#922b0f',
          900: '#772710',
        },
        ink: {
          50: '#f7f7f6',
          100: '#eeede9',
          200: '#d8d6cf',
          300: '#b8b4aa',
          400: '#938e82',
          500: '#776f62',
          600: '#5e5750',
          700: '#4a4540',
          800: '#3b3833',
          900: '#1c1a17',
          950: '#0d0c0a',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'orange-radial': 'radial-gradient(ellipse 80% 60% at 50% -10%, #f15a22 0%, transparent 70%)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'scale-up': { '0%': { opacity: '0', transform: 'scale(0.94)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        'float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'pulse-ring': { '0%': { transform: 'scale(1)', opacity: '0.6' }, '100%': { transform: 'scale(1.5)', opacity: '0' } },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up-d1': 'fade-up 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up-d2': 'fade-up 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up-d3': 'fade-up 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up-d4': 'fade-up 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.5s ease both',
        'scale-up': 'scale-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      }
    }
  },
  plugins: [],
}