/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Additional spacing for complex layouts
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      
      // Custom container sizes
      maxWidth: {
        'sb-narrow': '65ch',  // ~650px for reading
        'sb-wide': '90ch',    // ~900px for documentation
        'sb-content': '1200px', // Main content width
      },
      
      // Additional breakpoints
      screens: {
        'xs': '475px',
      },
    },
  },
}