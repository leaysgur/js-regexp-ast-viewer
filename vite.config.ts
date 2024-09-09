import { sveltekit } from "@sveltejs/kit/vite";
// import wasmPack from "vite-plugin-wasm-pack";
import wasm from "vite-plugin-wasm";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), wasm()],
  // plugins: [sveltekit(), wasmPack("./oxc_regular_expression_wasm")],
});
