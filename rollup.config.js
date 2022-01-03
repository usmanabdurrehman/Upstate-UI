import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import image from "@rollup/plugin-image";

export default [
  {
    input: {
      components: "src/Components/index.js",
    },
    output: [
      {
        dir: "lib",
        format: "cjs",
      },
    ],
    external: [
      "react",
      "react-click-away-listener",
      "classnames",
      "@material-ui/core",
      "@material-ui/icons",
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: "bundled" }),
      css(),
      image(),
    ],
  },
];
