import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const productBox = style({
  display: "flex",
  margin: `${vars.space['8x']} 0`,
  width: "100%",
})

export const productBoxLeft = style({
  height: "100%",
  width: "50%"
})

export const productBoxRight = style({
  height: "100%",
  width: "50%",
  padding: "1rem",
  backgroundColor: vars.colors.highlight
})