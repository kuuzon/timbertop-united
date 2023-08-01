import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/themes.css';

export const app = style({
  boxSizing: "border-box",
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

export const appContent = style({
  marginTop: "1rem",
  marginBottom: "1rem",
  flex: 1
})