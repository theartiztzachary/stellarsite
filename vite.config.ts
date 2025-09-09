import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "tailwindcss";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), netlifyPlugin()]
});
