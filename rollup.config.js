import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import auto from "@rollup/plugin-auto-install";

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
    plugins: [auto(), resolve(), commonjs()],
  },
];
