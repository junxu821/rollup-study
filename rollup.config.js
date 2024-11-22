import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "src/index.js",
  output: [
    // {
    //   file: "dist/bundle-iife.js",
    //   format: "iife",
    // },
    {
    //   file: "dist/bundle-esm.js",
      dir:'dist',
      format: "esm",
    },
    // {
    //   file: "dist/bundle-amd.js",
    //   format: "amd",
    // },
    // {
    //     file: "dist/bundle-cjs.js",
    //     format: "cjs",
    //   },
  ],
  plugins:[
    json(),
    nodeResolve(),
    commonjs()
  ]
};
