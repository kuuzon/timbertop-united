import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const boxSetting = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  textAlign: "center",
  margin: vars.space['1x'],
  padding: vars.space['8x'],
})

export const boxTitle = style({
  fontWeight: vars.fontWeights.bolder,
  fontSize: vars.fontSizes['7x']
})

export const boxPara = style({
  fontWeight: vars.fontWeights.light,
  fontSize: vars.fontSizes['1x'],
  margin: `${vars.space['4x']} 0`,
})

export const boxButton = style({
  marginTop: `${vars.space['8x']}`,
})