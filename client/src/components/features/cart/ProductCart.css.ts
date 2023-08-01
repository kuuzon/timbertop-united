import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const cartContainer = style({
  fontFamily: vars.fonts.brand,
})

export const cartHeader = style({
  fontSize: vars.fontSizes['1x'],
  fontWeight: vars.fontWeights.bolder,
  textTransform: "uppercase",
})

export const cartBody = style({
  fontFamily: vars.fonts.body,
})