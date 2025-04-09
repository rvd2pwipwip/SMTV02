import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // HMR is enabled for development
    // Automatically open browser
    open: true
  },
  build: {
    // Optimize for TV viewing
    target: 'esnext',
    // Generate source maps for debugging
    sourcemap: true,
    // Optimize chunk size for TV apps
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Ensure consistent chunk naming
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['./src/components']
        }
      }
    }
  }
}); 