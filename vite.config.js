import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // TV apps typically don't need hot module replacement
    hmr: false,
    // Disable automatic opening of browser
    open: false
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