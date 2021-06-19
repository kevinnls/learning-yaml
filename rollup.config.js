import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
const config = {
  input: "yamlParse.js",
  output: {
    file: "yaml.js",
    format: "iife",
    sourcemap: true,
    exports: "auto"
  },
  plugins: [resolve(), commonjs()],
};
export default config;
