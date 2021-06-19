import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
const config = {
  input: "main.js",
  output: {
    file: "index.js",
    format: "iife",
    name: "functions"
  },
  plugins: [resolve(), commonjs()],
};
export default config;
