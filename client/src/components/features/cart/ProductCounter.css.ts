import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

export const btnBox = style({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  margin: `${vars.space["4x"]} 0`,
  fontSize: vars.fontSizes["3x"],
})

export const counterBox = style({
  display: "inline",
  margin: 0,
  fontSize: "0.7em",
  padding: `${vars.space["0x"]} ${vars.space["4x"]}`,
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primaryContrast,
  border: `1px solid ${vars.colors.complementary}`
})