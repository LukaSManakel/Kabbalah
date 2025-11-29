import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use '.' to refer to CWD to avoid TypeScript error with process.cwd()
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    base: '/Kabbalah/', // Nome do repositório no GitHub
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})