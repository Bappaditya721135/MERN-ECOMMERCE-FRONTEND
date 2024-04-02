import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


const localUrl = "http://localhost:5000";
const url = "https://mern-ecommerce-backend-khaki.vercel.app/"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": url
    }
  }
})

