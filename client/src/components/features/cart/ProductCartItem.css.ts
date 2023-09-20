import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: vars.space['2x'],
  border: `2px solid ${vars.colors.highlightDark}`,
  borderRadius: vars.borderRadius['0x'],
  padding: vars.space['3x'],
  backgroundColor: vars.colors.primaryContrast,
  color: vars.colors.complementary,
  transition: "all 0.1s ease-in",

  ":hover": {
    backgroundColor: vars.colors.primary,
    borderColor: vars.colors.brandLight
  }
})

export const productSnapshot = style({
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "contain",
})

export const productDetails = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: `${vars.space['1x']} 0`
})

export const productTitle = style({
  fontSize: vars.fontSizes['0x'],
  fontWeight: vars.fontWeights.bolder,
  color: vars.colors.complementary,
  textTransform: "uppercase",
})

export const productPrice = style({
  color: vars.colors.highlightDark
})

globalStyle(`${productGrid} h6, p`, {
  margin: 0
});
