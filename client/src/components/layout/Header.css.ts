import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navbar = style({
  backgroundColor: vars.colors.primary,
  padding: `${vars.space['5x']} 0`,
  transition: "background 0.2s ease-in, color 0.2s ease-in",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
})

export const navLink = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["0x"],
  textTransform: "uppercase",
  transition: "0.2s ease-in"
})

export const logo = style({
  fontSize: vars.fontSizes["2x"],
  marginBottom: vars.space['2x'],
  color: vars.colors.brand,
  transition: "all 1s",

  ":hover": {
    transform: "scale(1.10) rotateZ(180deg)"
  }
})

export const brand = style({
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.bolder,
})