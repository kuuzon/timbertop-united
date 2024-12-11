import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const button = style({
  display: "inline-block",
  borderRadius: 0,
  border: "3px solid",
  textTransform: "uppercase",
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bolder,
  textAlign: "center",
  verticalAlign: "middle",
  minHeight: 0,
})

export const smBtn = style({
  fontSize: "0.8em",
  padding: `0 ${vars.space['1x']}`,
})

export const mdBtn = style({
  fontSize: "0.9em",
  padding: `${vars.space['0x']} ${vars.space['1x']}`,
})

export const lgBtn = style({
  fontSize: "1em",
  padding: `${vars.space['1x']} ${vars.space['2x']}`,
})

export const filledBtn = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  borderColor: vars.colors.complementary,
  transition: "0.2s ease-in-out",

  ":hover": {
    color: vars.colors.complementary,
    backgroundColor: vars.colors.primary,
    borderColor: vars.colors.complementary,
  }
})

export const outlineBtn = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  borderColor: vars.colors.complementary,
  transition: "0.2s ease-in-out",

  ":hover": {
    color: vars.colors.primary,
    backgroundColor: vars.colors.complementary,
    borderColor: vars.colors.complementary,
  }
})