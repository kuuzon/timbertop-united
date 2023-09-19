import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const cartCanvas = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.complementary,
  transition: "all 0.3s ease-in-out",
  '@media': {
    'screen and (max-width: 600px)': {
      width: "100% !important",
    }
  }
})

export const cartHeader = style({
  padding: `${vars.space['4x']} ${vars.space['5x']}`,
  marginTop: vars.space['5x'],
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

export const cartList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space['5x']
})

export const cartFooter = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: vars.colors.primary,
  padding: `${vars.space['7x']} ${vars.space['4x']}`,
  borderTop: `2px solid ${vars.colors.highlightDark}`
})

export const cartFooterTotal = style({
  fontSize: vars.fontSizes['0x']
})