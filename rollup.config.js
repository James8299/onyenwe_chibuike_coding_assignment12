import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  // Main build (ESM & CJS)
  {
    input: "src/index.ts",
    output: [
      { file: "dist/esm/index.js", format: "esm", sourcemap: true },
      { file: "dist/cjs/index.js", format: "cjs", sourcemap: true }
    ],
    plugins: [
      resolve(), 
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json"
      })
    ],
    external: ["react", "react-dom"] // Mark React as external to avoid bundling it
  },
  
  // Type Definitions (.d.ts)
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()]
  }
];
