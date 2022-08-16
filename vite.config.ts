// Packages
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'website',
  },
  plugins: [svgr({
    exportAsDefault: false,
  }), react({
    // Use React plugin in all *.tsx files
    include: '**/*.{tsx}',
  }), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
  })],
});
