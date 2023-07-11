import { style } from "@vanilla-extract/css";

export const app = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
})

export const appContent = style({
  marginTop: "1rem",
  marginBottom: "1rem",
  flex: 1
})