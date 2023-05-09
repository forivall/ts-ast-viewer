import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

export default defineConfig({
  define: {
    'process.versions.pnp': undefined,
  },
  plugins: [
    react(),
    monacoEditorPlugin({}),
  ],
});
