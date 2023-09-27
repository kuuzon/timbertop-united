import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const previewContainer = style({
  margin: `${vars.space["5x"]} auto`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

export const previewImage = style({
  marginTop: "1rem",
  width: "30%",
  padding: `${vars.space["1x"]}`,
  border: `2px solid ${vars.colors.brand}`,
  borderRadius: "5px",
  opacity: 0.7
})