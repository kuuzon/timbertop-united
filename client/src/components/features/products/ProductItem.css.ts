import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const productLink = style({
  color: vars.colors.complementary,
  textDecoration: "none",
})

export const productCard = style({
  display: "grid",
  aspectRatio: "1 / 1",
  textAlign: "center",
})

export const productCardImage = style({
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "contain",
  transition: `all 0.2s`,

  ":hover": {
    transform: "scale(1.01)"
  }
})

export const productCardContent = style({
  background: vars.colors.primary,
  alignSelf: "end",
  margin: "0.5rem 0.5rem",
  padding: "0.5rem",
})
export const productCardTitle = style({
  fontSize: vars.fontSizes['1x'],
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights['1x'],
  transition: `all 0.2s`,

  ":hover": {
    color: vars.colors.brand,
    transform: "scale(1.01)"
  }
})
export const productCardDescription = style({
  fontSize: vars.fontSizes['0x'],
  fontWeight: vars.fontWeights.light,
  color: vars.colors.grey600
})