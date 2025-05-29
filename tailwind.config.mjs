/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblack: {
          '50': '#f5f5f6',
          '100': '#e5e5e8',
          '200': '#cfd0d2',
          '300': '#adafb3',
          '400': '#83848d',
          '500': '#686972',
          '600': '#595961',
          '700': '#4c4d52',
          '800': '#434347',
          '900': '#3b3b3e',
          '950': '#1b1b1d'
        },
        lightgray: { // fixed key name (no spaces)
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#cfcfd2',
          '300': '#aeafb2',
          '400': '#85858b',
          '500': '#64646a',
          '600': '#5a5a60',
          '700': '#4d4d51',
          '800': '#444446',
          '900': '#3c3b3e',
          '950': '#262527'
        },
        grayer: {
          '50': '#f6f7f8',
          '100': '#eeeff1',
          '200': '#dbdde2',
          '300': '#c3c7cd',
          '400': '#a5aab5',
          '500': '#8f94a2',
          '600': '#7e8292',
          '700': '#717484',
          '800': '#5f626e',
          '900': '#4e505a',
          '950': '#323339'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
