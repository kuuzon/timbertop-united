import { createGlobalTheme, createTheme, createThemeContract } from "@vanilla-extract/css";
import twColors from 'tailwindcss/colors';

export const root = createGlobalTheme(":root", {
  fonts: {
    system: "Montserrat, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    primary: "#FFFFFF",
    complementary: "#000000",
    // complementaryLight: "",
    // complementaryDark: "",
    brand: "#059669",
    // brandLight: "",
    // brandDark: "",

    // Color tokens
    // success: "#22c55e",
    // warning: "",
    // error: "#f87171",
    grey200: "#f9fafb",
    grey300: "#e5e7eb",
    grey400: "#d1d5db",
    grey500: "#9ca3af",
    grey600: "#4b5563",
  },
  space: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSizes: {
    1: '8px',
    2: '12px',
    3: '16px', 
    4: '20px', 
    5: '24px', 
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
  // lineHeights: {},
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