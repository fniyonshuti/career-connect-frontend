import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    port: process.env.PORT || 10000, // Use Render's port or default to 10000
    host: '0.0.0.0',
    allowedHosts: ["career-connect-frontend-k9z7.onrender.com"] // Allow your deployed host
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: ["career-connect-frontend-k9z7.onrender.com"], // Allow during preview mode as well
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // Ensure '@' is mapped to your src directory
    },
  },
})
