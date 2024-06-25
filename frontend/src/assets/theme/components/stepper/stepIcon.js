/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

const { white } = colors;

export default {
  styleOverrides: {
    root: {
      background: "#031b27",
      fill: "#031b27",
      stroke: "#031b27",
      borderColor: "#031b27",
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: "#ffd415",
        fill: "#ffd415",
        stroke: "#ffd415",
        borderColor: "#eccd6a",
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },

      "&.Mui-completed": {
        background: "#031b27",
        fill: "#031b27",
        stroke: "#031b27",
        borderColor: "#031b27",
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
};
