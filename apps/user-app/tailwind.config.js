 /** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
       "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
       "./component/**/*.{js,ts,jsx,tsx,mdx}",
       "./ui/**/*.{js,ts,jsx,tsx,mdx}",
       "./pages/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }