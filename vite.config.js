import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// const env = loadEnv('development', process.cwd(), '')
const env = loadEnv('production', process.cwd(), '')

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://putihskinclinic.com/',
  plugins: [react(), tsconfigPaths()],
  define: {
    "env": env,
    global: 'window'
  },
})
