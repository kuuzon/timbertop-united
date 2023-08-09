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
  colors: {
    // Semantic tokens
    primary: twColors.white,
    complementary: twColors.black,
    // complementaryLight: "",
    // complementaryDark: "",
    brand: twColors.emerald[600],
    brandLight: twColors.emerald[400],
    brandDark: twColors.emerald[700],

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
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
  // letterSpacings: {},
  // sizes: {},
  // borderWidths: {},
  // borderStyles: {},
  // radii: {},
  // shadows: {},
  // zIndices: {},
  // transitions: {},
  // media: {
    // MAX-WIDTH: WEBAPP-FIRST APPROACH (anything above 1280px is the default width)
  //   xs: "(max-width: 640px)",
  //   sm: "(max-width: 768px)",
  //   md: "(max-width: 1024px)",
  //   lg: "(max-width: 1280px)",   

    // MIN-WIDTH: MOBILE-FIRST APPROACH (anything from 0px to 640px is the default width)
  //   bp1: '(min-width: 640px)',
  //   bp2: '(min-width: 768px)',
  //   bp3: '(min-width: 1024px)',
  //   bp4: '(min-width: 1280px)',
  // },
})

// const colors = createThemeContract({
//   primary: null,
//   complementary: null,
//   brand: null,
//   error: null,
//   grey200: null,
//   grey300: null,
//   grey400: null,
//   grey500: null,
//   grey600: null,
// });

// export const lightTheme = createTheme(colors, {
//   primary: "#FFFFFF",
//   complementary: "#000000",
//   brand: "#059669",
//   error: "#f87171",
//   grey200: "#f9fafb",
//   grey300: "#e5e7eb",
//   grey400: "#d1d5db",
//   grey500: "#9ca3af",
//   grey600: "#4b5563",
// });

// export const darkTheme = createTheme(colors, {
//   primary: "#000000",
//   complementary: "#FFFFFF",
//   brand: "#059669",
//   error: "#f87171",
//   grey200: "#f9fafb",
//   grey300: "#e5e7eb",
//   grey400: "#d1d5db",
//   grey500: "#9ca3af",
//   grey600: "#4b5563",
// });

export const vars = { ...root };