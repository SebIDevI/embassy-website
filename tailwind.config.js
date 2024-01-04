/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        blueEmb: "#005691",
        blueEmbDark: "#004A7C",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-2440px)" },
        },
        floating: {
          "0%": { bottom: "2.5rem" },
          "50%": { bottom: "4rem" },
          "100%": { bottom: "2.5rem" },
        },
        slideX: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-6px)" },
          "100%": { transform: "translateX(0)" },
        },
        floatingQ: {
          "0%": { marginTop: "0px" },
          // "25%": { marginTop: "-7px", paddingLeft: "0px" },
          "50%": { marginTop: "-50px" },
          // "75%": { marginTop: "-7px", paddingLeft: "14px" },
          "100%": { marginTop: "0px" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        "in-btn": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(-100%)",
            borderRadius: 0,
          },
        },
        "out-btn": {
          "0%": {
            transform: "translateY(-100%)",
            borderRadius: "100%",
          },
          "100%": {
            transform: "translateY(0)",
            borderRadius: 0,
          },
        },
        "in-acc": {
          "0%": {
            transform: "translateY(100%)",
            borderRadius: "100%",
          },
          "100%": {
            transform: "translateY(0%)",
            borderRadius: 0,
          },
        },
        "out-acc": {
          "0%": {
            transform: "translateY(0)",
            borderRadius: "0",
          },
          // "50%": {
          //   transform: "translateY(0)",
          //   borderRadius: "0",
          // },
          "100%": {
            transform: "translateY(100%)",
            borderRadius: "100%",
          },
        },
        ttlSld: {
          from: {
            transform: "translateY(100%)",
            display: "inline-block",
          },
          to: {
            transform: "translateY(0%)",
            display: "inline-block",
          },
        },
      },
      animation: {
        slide: "slide 60s linear infinite",
        slideX: "slideX 2s cubic-bezier(1, .26, .26, .9) infinite",
        floating: "floating 2s cubic-bezier(1, .26, .26, .9) infinite",
        floatingQ: "floatingQ 5s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wave: "wave 1s linear infinite",
        "anim-out-btn": "out-btn 1.2s cubic-bezier(.19, 1, .22, 1) forwards",
        "anim-in-btn": "in-btn 1.2s cubic-bezier(.19, 1, .22, 1) forwards",
        "anim-out-acc": "out-acc 1.2s cubic-bezier(.19, 1, .22, 1) forwards",
        "anim-in-acc": "in-acc 1.2s cubic-bezier(.19, 1, .22, 1) forwards",
        ttlSld: "ttlSld 0.8s cubic-bezier(.19, 1, .22, 1) forwards",
      },
      animationDelay: {
        1: "0.1s",
        2: "0.3s",
        3: "0.5s",
        4: "0.7s",
        5: "0.9s",
        6: "1.1s",
        7: "1.3s",
        8: "1.5s",
        9: "1.7s",
      },
      transitionDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
      },
      fontFamily: {
        coolvetica: ["var(--font-coolvetica)"],
        dopestyle: ["var(--font-dopestyle)"],
        franky: ["var(--font-franky)"],
        comic: ["var(--font-comic)"],
        holyfat: ["var(--font-holyfat)"],
        monday: ["var(--font-monday)"],
        lemonmilk: ["var(--font-lemonmilk)"],
        pro: ["var(--font-pro)"],
        proBlack: ["var(--font-proBlack)"],
        graphik: ["var(--font-graphik)"],
        graphikThin: ["var(--font-graphikThin)"],
        graphikExtralight: ["var(--font-graphikExtralight)"],
        graphikLight: ["var(--font-graphikLight)"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
