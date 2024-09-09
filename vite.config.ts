import { sveltekit } from "@sveltejs/kit/vite";
import wasmPack from "vite-plugin-wasm-pack";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), wasmPack("./oxc_regular_expression_wasm")],
});
