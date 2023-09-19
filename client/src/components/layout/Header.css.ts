import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navbar = style({
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.primary,
  padding: `${vars.space['5x']} 0`,
  boxShadow: `${vars.colors.primaryContrast} 0px 2px 2px 0px`
})

export const brandLink = style({
  display: 'flex',
  flexDirection: "row",
  gap: vars.space['2x'],
  alignItems: "center",
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["0x"],
  textTransform: "uppercase",
  transition: "0.2s ease-in-out",

  ":focus": {
    color: vars.colors.complementary,
  },

  ":hover": {
    color: vars.colors.highlightDark,
  },
})

export const logo = style({
  width: 60,
})

export const logoTextBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
})

export const brand = style({
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.bolder,
  lineHeight: vars.lineHeights['0x']
})

export const brandSub = style({
  fontSize: vars.fontSizes["0x"],
  fontWeight: vars.fontWeights.light,
})

export const navLink = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["0x"],
  textTransform: "uppercase",
  transition: "0.2s ease-in",

  ":focus": {
    color: vars.colors.brand,
  },

  ":hover": {
    color: vars.colors.brandLight,
  },
})