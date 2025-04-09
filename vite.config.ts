import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@hook": "/src/hook",
      "@config": "/src/config",
      "@interfaces": "/src/interfaces",
      "@type": "/src/types",
      "@styles": "/src/styles",
      "@services": "/src/services",
      "@pages": "/src/pages",
      "@data": "/src/data",
    },
  },
});
