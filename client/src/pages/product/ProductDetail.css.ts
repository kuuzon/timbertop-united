import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const productBox = style({
  display: "flex",
  flexDirection: "row",
  margin: `${vars.space['8x']} 0`,
  width: "100%",
})

export const productBoxLeft = style({
  margin: `${vars.space["4x"]} 0`,
  height: "100%",
  width: "60%",
})

export const productWindow = style({
  width: "80%",
  aspectRatio: "1 / 1",
  objectFit: "contain",
  margin: "auto"
})

export const productBoxRight = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["5x"],
  height: "100%",
  width: "40%",
})

export const productHeroContainer = style({
  padding: vars.space["0x"],
  width: "100%"
})

export const productTitle = style({
  textTransform: "uppercase",
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.bolder,
})

export const productPrice = style({
  textTransform: "uppercase",
  fontSize: vars.fontSizes["0x"],
  fontWeight: vars.fontWeights.bolder,
  marginBottom: vars.space["0x"]
})

export const productAvailabile = style({
  fontSize: "0.9em",
  fontWeight: vars.fontWeights.light,
  color: vars.colors.success
})

export const productUnvailabile = style({
  fontSize: "0.9em",
  fontWeight: vars.fontWeights.light,
  color: vars.colors.error
})

export const productDetailsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["6x"],
  padding: "2rem",
  margin: `${vars.space["1x"]} auto`,
  backgroundColor: vars.colors.primaryContrast,
  border: `2px solid ${vars.colors.primaryContrast}`,
  boxShadow: `0 2px 8px rgba(0, 0, 0, 0.2)`,
  width: "100%"
})

export const boxDescription = style({
  margin: 0,
  fontSize: "0.9em",
})

export const userActions = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  height: "40px"
})