import { resolve } from 'path'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: {
    prefix: "w-"
  },
  extract: {
    include: [
      resolve(__dirname, 'src/**/*.{tsx,jsx,js,html}'),
    ],
  },
})
