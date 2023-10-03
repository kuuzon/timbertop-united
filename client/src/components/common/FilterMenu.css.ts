import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const menuContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: vars.space['1x'],
  justifyContent: "center",
})