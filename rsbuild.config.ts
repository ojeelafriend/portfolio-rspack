import { defineConfig, HtmlRspackPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: { title: "Alejo R. Solis", favicon: "./public/resource/rocket.svg" },
});
