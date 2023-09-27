import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const styledInput = style({
  margin: "2rem 0",
  textAlign: "center",
  fontWeight: vars.fontWeights.bolder,
  fontSize: "0.8em",
  letterSpacing: "0.1em",
  outline: "none",
  border: `2px solid rgba(0, 0, 0, 0.02)`,
  borderRadius: vars.borderRadius["1x"],
  color: vars.colors.complementary,
  background: vars.colors.primaryContrast,
  transition: "all 0.2s",

  ":focus": {
    border: `2px solid ${vars.colors.highlight}`,
    backgroundColor: vars.colors.primaryContrast,
    color: vars.colors.complementary,
    boxShadow: "none",
    transform: "scale(1.01)",
  },

  "::placeholder": {
    color: vars.colors.highlightDark,
  }
})