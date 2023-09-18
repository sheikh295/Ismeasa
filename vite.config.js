import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "app": path.resolve(__dirname, "./src/"),
        assets: `${path.resolve(__dirname, "./src/assets/")}`,
        components:  `${path.resolve(__dirname, "./src/components/")}`,
        pages: `${path.resolve(__dirname, "./src/pages/")}`,
        routes: `${path.resolve(__dirname, "./src/routes/")}`,
        shared: `${path.resolve(__dirname, "./src/shared/")}`,
    }
}
})
