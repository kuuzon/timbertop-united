import { createGlobalTheme, createTheme, createThemeContract } from "@vanilla-extract/css";
import { modularScale } from 'polished';
import twColors from 'tailwindcss/colors';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const fontSizeScale = createScale(1.2, 16);
const lineHeightScale = createScale(1.25, 24);
const borderRadiusScale = createScale(1.5, 4);

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Montserrat, apple-system, sans-serif",
    body: "Open Sans, apple-system, sans-serif",
  },
  space: {
    none: '0',
    '0x': spaceScale(0),
    '1x': spaceScale(1),
    '2x': spaceScale(2),
    '3x': spaceScale(3),
    '4x': spaceScale(4),
    '5x': spaceScale(5),
    '6x': spaceScale(6),
    '7x': spaceScale(7),
    '8x': spaceScale(8),
    '9x': spaceScale(9),
    '10x': spaceScale(10),
  },
  fontSizes: {
    '0x': fontSizeScale(0),
    '1x': fontSizeScale(1),
    '2x': fontSizeScale(2),
    '3x': fontSizeScale(3),
    '4x': fontSizeScale(4),
    '5x': fontSizeScale(5),
    '6x': fontSizeScale(6),
    '7x': fontSizeScale(7),
    '8x': fontSizeScale(8),
  },
  lineHeights: {
    '0x': lineHeightScale(0),
    '1x': lineHeightScale(1),
    '2x': lineHeightScale(2),
    '3x': lineHeightScale(3),
    '4x': lineHeightScale(4),
    '5x': lineHeightScale(5),
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
  borderRadius: {
    '0x': borderRadiusScale(0),
    '1x': borderRadiusScale(1),
    '2x': borderRadiusScale(2),
    '3x': borderRadiusScale(3),
    '4x': borderRadiusScale(4),
    '5x': borderRadiusScale(5),
    full: '99999px',
  },
  // media: {
  //   xs: 'screen and (min-width: 480px)',
  //   sm: 'screen and (min-width: 768px)',
  //   md: 'screen and (min-width: 1024px)',
  //   lg: 'screen and (min-width: 1280px)',
  // },
  // letterSpacings: {},
  // sizes: {},
  // borderWidths: {},
  // borderStyles: {},
  // radii: {},
  // shadows: {},
  // zIndices: {},
  // transitions: {},
})

const colors = createThemeContract({
  primary: null,
  primaryContrast: null,
  complementary: null,
  brand: null,
  brandLight: null,
  brandDark: null,
  highlightLight: null,
  highlight: null,
  highlightDark: null,
  success: null,
  warning: null,
  error: null,
});

export const lightTheme = createTheme(colors, {
  primary: twColors.white,
  primaryContrast: twColors.gray[50],
  complementary: twColors.black,
  brand: twColors.emerald[600],
  brandLight: twColors.emerald[400],
  brandDark: twColors.emerald[700],
  highlightLight: twColors.gray[200],
  highlight: twColors.gray[400],
  highlightDark: twColors.gray[600],
  success: twColors.green[400],
  warning: twColors.amber[400],
  error: twColors.rose[600]
});

export const darkTheme = createTheme(colors, {
  primary: twColors.slate[900],
  primaryContrast: twColors.slate[800],
  complementary: twColors.white,
  brand: twColors.emerald[600],
  brandLight: twColors.emerald[400],
  brandDark: twColors.emerald[700],
  highlightLight: twColors.gray[200],
  highlight: twColors.gray[300],
  highlightDark: twColors.gray[400],
  success: twColors.green[400],
  warning: twColors.amber[400],
  error: twColors.rose[600],
});

export const vars = { ...root, colors };