import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      // Force react-router-dom to resolve to react-router v7
      'react-router-dom': path.resolve(__dirname, './node_modules/react-router'),
    },
    // Prevent resolving to parent node_modules
    dedupe: ['react', 'react-dom', 'react-router'],
  },
  server: {
    allowedHosts: [
      '2655cb521cfe.ngrok-free.app',
      '.ngrok-free.app', // Allow any ngrok subdomain
    ],
  },
});
