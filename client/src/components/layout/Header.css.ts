import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';
import { transitions } from 'polished';

export const navbar = style({
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.primary,
  padding: `${vars.space['5x']} 0`,
  boxShadow: `${vars.colors.primaryContrast} 0px 2px 2px 0px`,
})

export const brandLink = style({
  display: 'flex',
  flexDirection: "row",
  gap: vars.space['2x'],
  alignItems: "center",
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["0x"],
  textTransform: "uppercase",
  transition: "0.5s ease-in-out",
  padding: 0,

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

export const hamburgerBtn = style({
  color: vars.colors.primaryContrast
})

export const navLink = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["0x"],
  textTransform: "uppercase",
  transition: "0.5s ease-in",

  ":focus": {
    color: vars.colors.brand,
  },

  ":hover": {
    color: vars.colors.brandLight,
  },
})

export const buttonNav = style({
  gap: vars.space['1x'],
  alignItems: "center"
})

const baselineDeg = 23;
const wiggle = keyframes({
  '0%': { transform: `rotate(${baselineDeg}deg)` },
  '25%': { transform: `rotate(${baselineDeg * 1.5}deg)` },
  '50%': { transform: `rotate(${baselineDeg / 1.2}deg)` },
  '65%': { transform: `rotate(${baselineDeg * 1.2}deg)` },
  '80%': { transform: `rotate(${baselineDeg / 1.1}deg)` },
  '90%': { transform: `rotate(${baselineDeg * 1.05}deg)` },
  '100%': { transform: `rotate(${baselineDeg}deg)` }
});

export const themeToggleBtn = style({
  fontSize: vars.fontSizes['3x'],
  marginBottom: vars.space['0x'],
  color: vars.colors.complementary,
  transform: `rotate(${baselineDeg}deg)`,

  ":hover": {
    color: vars.colors.highlight,
    animation: `${wiggle} 0.5s`
  }
});