/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      keyframes:{
        eth:{
          '0% , 100%':{transform: 'translateX(22px) translateY(-5px)'},
          '75%':{transform: 'translateX(-24px) translateY(-15px)'},
          '50%':{transform: 'translateX(-12px)'},
        },
        usdt:{
          '0% , 100%':{transform: 'translateX(-10px) translateY(-5px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(15px) translateY(-14px)'},
        },
        avax:{
          '0% , 100%':{transform: 'translateX(27px) translateY(-3px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(15px) translateY(-14px)'},
        },
        sol:{
          '0% , 100%':{transform: 'translateX(-27px) translateY(3px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(-15px) translateY(-19px)'},
        },
        bin:{
          '0% , 100%':{transform: 'translateX(41px) translateY(15px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(-14px) translateY(-21px)'},
        },
        shib:{
          '0% , 100%':{transform: 'translateX(-27px) translateY(3px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(-15px) translateY(-19px)'},
        },
        btc:{
          '0% , 100%':{transform: 'translateX(-27px) translateY(3px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(-15px) translateY(-19px)'},
        },
        usdc:{
          '0% , 100%':{transform: 'translateX(-27px) translateY(3px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(-15px) translateY(-19px)'},
        },
        dot:{
          '0% , 100%':{transform: 'translateX(-27px) translateY(3px)'},
          '75%':{transform: 'translateX(0px) translateY(0px)'},
          '50%':{transform: 'translateX(-15px) translateY(-19px)'},
        },
      },
      animation:{
        'eth':'eth 10s linear infinite',
        'usdt':'usdt 8s linear infinite',
        'avax':'avax 7s linear infinite',
        'sol':'sol 9s linear infinite',
        'bin':'bin 11s linear infinite',
        'dot':'dot 6s linear infinite',
        'shib':'shib 15s linear infinite',
        'btc':'btc 8s linear infinite',
        'usdc':'usdc 8s linear infinite',
      },
      fontFamily:{
        'custom':["IBM Plex Mono", 'monospace']
      }
    },
  },
  plugins: [],
}

