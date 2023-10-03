import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navlink = style({
  display: "inline-flex",
  flexDirection: "column",
  textDecoration: "none",
  margin: vars.space['1x'],
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  borderRadius: 0,
  border: `3px ${vars.colors.complementary} solid`,
  textTransform: "uppercase",
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bolder,
  textAlign: "center",
  justifyContent: "center",

  ":hover": {
    color: vars.colors.complementary,
    backgroundColor: vars.colors.primary,
    border: `3px ${vars.colors.complementary} solid`,
  }
})

export const smLink = style({
  fontSize: "0.9em",
  padding: `${vars.space['0x']} ${vars.space['1x']}`,
})

export const mdLink = style({
  fontSize: "1em",
  padding: `${vars.space['1x']} ${vars.space['2x']}`,
})