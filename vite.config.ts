import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), netlifyPlugin(), netlify()]
});
