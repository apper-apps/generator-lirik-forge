/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blueberry: {
          50: '#FAFAFF',
          100: '#F0EDFF',
          200: '#E0DBFF',
          300: '#C5BAFF',
          400: '#9B8FEE',
          500: '#7B6FDE',
          600: '#5B4FCF',
          700: '#4A3FB5',
          800: '#3A2F94',
          900: '#2A1F73'
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(91, 79, 207, 0.3)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(91, 79, 207, 0.6)'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)' 
          },
        }
      }
    },
  },
  plugins: [],
}