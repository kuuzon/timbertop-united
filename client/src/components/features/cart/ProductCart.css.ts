import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const cartContainer = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.highlightDark,
  transition: "all 0.3s ease-in-out"
})

export const cartHeader = style({
  fontFamily: vars.fonts.brand,
})

export const cartTitle = style({
  fontSize: vars.fontSizes['1x'],
  fontWeight: vars.fontWeights.bolder,
  textTransform: "uppercase",
})

export const cartBody = style({
  fontFamily: vars.fonts.body,
})