import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const menuTitle = style({
  textTransform: "uppercase",
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.bolder,
  marginBottom: vars.space["7x"]
})

export const productsWarning = style({
  fontSize: vars.fontSizes["2x"],
  color: vars.colors.brandLight,
  margin: vars.space["8x"],
})