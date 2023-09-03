import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});

//import path from "node:path" -ეს უნდა გავუშვათ და ვაიტ კონფიგი ასე უნდა დავვაფდეითოთ რომ აბსოლუტ იმპორტები გავაკეთოთ ვაიტში
