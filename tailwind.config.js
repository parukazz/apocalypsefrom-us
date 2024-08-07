import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        lime: "#AFEE03",
        green: "#048802",
        purple: {
          DEFAULT: "#540EAE",
          95: "#5C19B1",
          80: "#743CBC",
          60: "#946ACA",
          40: "#8599D9",
        },
        dark: {
          DEFAULT: "#070608",
          95: "#131214",
          90: "#1F1E20",
          80: "#373637",
          60: "#666667",
          20: "#C5C5C6",
        },
      },
      fontFamily: {
        clashgrotesk: "var(--font-grotesk)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-bold text-[3.125rem] leading-[100%] md:text-[4.5rem] lg:text-[8.5rem]":
            {},
        },
        ".h2": {
          "@apply font-semibold text-[3rem] leading-[110%] md:text-[4rem] lg:text-[5rem]":
            {},
        },
        ".h3": {
          "@apply font-semibold text-[1.25rem] leading-[110%] md:text-[1.75rem] lg:text-[2.25rem]":
            {},
        },
        ".h4": {
          "@apply font-semibold text-[1rem] leading-[110%] md:text-[1.125rem] lg:text-[1.5rem]":
            {},
        },
        ".h5": {
          "@apply font-medium text-[0.875rem] leading-[110%] md:text-[1rem] lg:text-[1.25rem]":
            {},
        },
        ".p-italic": {
          "@apply italic text-[1.25rem] leading-[28px]": {},
        },
        ".p-button": {
          "@apply font-medium text-[1.125rem] tracking-[-0.5px] leading-[1.4em]":
            {},
        },
        ".p-s-bold": {
          "@apply font-bold text-[0.875rem] tracking-[0.5px] leading-[1.6em]":
            {},
        },
        ".p-s-medium": {
          "@apply font-medium text-[0.875rem] tracking-[0.5px] leading-[1.2em]":
            {},
        },
        ".p-s-regular": {
          "@apply text-[0.875rem] leading-[1.6em]": {},
        },
        ".p-l-bold": {
          "@apply font-bold text-[1.25rem] leading-[1.2em]": {},
        },
        ".p-l-medium": {
          "@apply font-medium text-[1.25rem] leading-[1.2em]": {},
        },
        ".p-l-regular": {
          "@apply text-[1.25rem] leading-[1.4em]": {},
        },
        ".p-bold": {
          "@apply text-[1rem] leading-[1.2em]": {},
        },
        ".p-medium": {
          "@apply font-medium text-[1rem] leading-[1.8em]": {},
        },
        ".p-regular": {
          "@apply text-[1rem] leading-[1.8em]": {},
        },
        ".border-stroke": {
          "@apply border-2 border-zinc-800": {},
        },
        ".bg-gradient-lime": {
          "@apply bg-gradient-to-b from-lime to-green": {},
        },
        ".social-list": {
          "@apply bg-white bg-opacity-5 rounded-full p-4 border-2 border-white border-opacity-10 hover:bg-white hover:text-dark transition duration-300 ease-in-out hover:scale-90":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
