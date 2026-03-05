import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1120px',
        },
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;

