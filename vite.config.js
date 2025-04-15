import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable HMR with specific settings
    hmr: {
      overlay: true,  // Show errors in browser overlay
      timeout: 5000,  // Increase timeout for slower connections
    },
    // Watch for file changes
    watch: {
      usePolling: true,  // Use polling for more reliable file watching
    },
    // Automatically open browser
    open: true,
    // Host setting to ensure proper network access
    host: true,
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