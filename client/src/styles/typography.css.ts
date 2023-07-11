import { globalFontFace, style } from "@vanilla-extract/css";

const montserrat = "GlobalMontserrat";

// https://fonts.google.com/knowledge/using_type/using_web_fonts#reference-the-font-files
globalFontFace(montserrat, {
  src: "local('Montserrat Regular'), url(montserrat.woff2) format('woff2')",
})

export const font = style({
  fontFamily: montserrat
});