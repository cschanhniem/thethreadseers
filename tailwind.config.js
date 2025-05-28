/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Thread Seers Color Palette
        background: {
          primary: "#0A0A0C",
          secondary: "#0F0F12",
        },
        text: {
          primary: "#FAFAFA",
          body: "#EAEAEA",
          secondary: "#4A4A4A",
          muted: "#555555",
        },
        accent: {
          silver: "#C0C0C0",
          "silver-muted": "#B8B8B8",
          blue: "#A8BBDC",
          gold: "#B89B72",
          violet: "#A095B5",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(3.2rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'h1': ['clamp(2.4rem, 5vw, 3.2rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'h2': ['clamp(1.8rem, 4vw, 2.6rem)', { lineHeight: '1.3' }],
        'h3': ['clamp(1.4rem, 3vw, 1.9rem)', { lineHeight: '1.4' }],
        'body': ['clamp(1.05rem, 2.5vw, 1.2rem)', { lineHeight: '1.7' }],
        'caption': ['clamp(0.85rem, 2vw, 0.95rem)', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'reading': '70ch',
        'prose': '60ch',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "luminous-pulse": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(192, 192, 192, 0.3)",
            transform: "scale(1)"
          },
          "50%": {
            textShadow: "0 0 20px rgba(168, 187, 220, 0.5), 0 0 30px rgba(192, 192, 192, 0.3)",
            transform: "scale(1.02)"
          },
        },
        "thread-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "luminous-pulse": "luminous-pulse 3s ease-in-out infinite",
        "thread-shimmer": "thread-shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
