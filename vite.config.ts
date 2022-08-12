import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'website',
  },
  plugins: [react({
    // Use React plugin in all *.tsx files
    include: '**/*.{tsx}',
  })],
});
