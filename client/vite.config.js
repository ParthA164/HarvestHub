import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    https: false // Disabled for production - Render handles SSL
  },
  build: {
    // Increase chunk size warning limit to 1000kb (from default 500kb)
    chunkSizeWarningLimit: 1000,
    
    // Better chunk splitting for optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries into their own chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          ui: ['@reduxjs/toolkit', 'axios'],
          // Map libraries  
          maps: ['leaflet', 'leaflet-geosearch'],
        }
      }
    },
    
    // Disable source maps in production for smaller bundle size
    sourcemap: false,
    
    // Optimize assets
    assetsDir: 'assets',
    
    // Enable minification
    minify: 'esbuild'
  }
});
