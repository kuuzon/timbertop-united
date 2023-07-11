import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  padding: vars.space["5x"],
  borderTop: `1px solid ${vars.colors.grey300}`,
  textAlign: "center",
  transition: "background 0.2s ease-in, color 0.2s ease-in, border-top 0.2s ease-in"
})