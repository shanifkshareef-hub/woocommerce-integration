import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: "path",
        replacement: "rollup-plugin-node-polyfills/polyfills/path",
      },
      {
        find: "stream",
        replacement: "rollup-plugin-node-polyfills/polyfills/stream",
      },
      {
        find: "zlib",
        replacement: "rollup-plugin-node-polyfills/polyfills/zlib",
      },
      {
        find: "Buffer",
        replacement: "rollup-plugin-node-polyfills/polyfills/buffer",
      },
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@assets", replacement: path.resolve(__dirname, "./src/assets") },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "./src/layouts"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "./src/services"),
      },
    ],
  },
});
