import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  server:{port:8000,host:'0.0.0.0'},
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Обычно это ваш главный HTML
        sw: './sw.js' // Укажите путь к вашему sw.js
      }
    }
  }
},
);
