import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const button = style({
  display: "inline-flex",
  flexDirection: "column",
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

export const smBtn = style({
  fontSize: "0.9em",
  padding: `${vars.space['0x']} ${vars.space['1x']}`,
})

export const mdBtn = style({
  fontSize: "1em",
  padding: `${vars.space['1x']} ${vars.space['2x']}`,
})