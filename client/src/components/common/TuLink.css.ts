import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navlink = style({
  textDecoration: "none",
  margin: vars.space['1x'],
  padding: vars.space['2x'],
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  borderRadius: 0,
  border: `3px ${vars.colors.complementary} solid`,
  textTransform: "uppercase",
  fontFamily: vars.fonts.system,
  fontWeight: vars.fontWeights.bolder,

  ":hover": {
    color: vars.colors.complementary,
    backgroundColor: vars.colors.primary,
    border: `3px ${vars.colors.complementary} solid`,
  }
})