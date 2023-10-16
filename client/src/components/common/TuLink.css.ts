import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navlink = style({
  display: "inline-block",
  textDecoration: "none",
  borderRadius: 0,
  border: "3px solid",
  textTransform: "uppercase",
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bolder,
  textAlign: "center",
  verticalAlign: "middle",
  minHeight: 0,
})

export const smLink = style({
  fontSize: "0.8em",
  padding: `0 ${vars.space['1x']}`,
})

export const mdLink = style({
  fontSize: "0.9em",
  padding: `${vars.space['0x']} ${vars.space['1x']}`,
})

export const lgLink = style({
  fontSize: "1em",
  padding: `${vars.space['1x']} ${vars.space['2x']}`,
})

export const filledLink = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  borderColor: vars.colors.complementary,

  ":hover": {
    color: vars.colors.complementary,
    backgroundColor: vars.colors.primary,
    borderColor: vars.colors.complementary,
  }
})

export const outlineLink = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  borderColor: vars.colors.complementary,

  ":hover": {
    color: vars.colors.primary,
    backgroundColor: vars.colors.complementary,
    borderColor: vars.colors.complementary,
  }
})