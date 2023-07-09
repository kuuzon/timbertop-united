import { createStitches } from '@stitches/react';

// INSTANCE OF STITCHES FUNCTIONS: https://stitches.dev/docs/installation#available-functions
// FUNCTION API: https://stitches.dev/docs/api
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // THEME: Setup custom design tokens (14 different custom design token objects, known as "scales"): https://stitches.dev/docs/api#theme
  theme: {
    fonts: {
      system: "Barlow, apple-system, sans-serif",
    },
    colors: {
      grey200: "#f9fafb",
      grey300: "#e5e7eb",
      grey400: "#d1d5db",
      grey500: "#9ca3af",
      grey600: "#4b5563",

      // Semantic tokens
      primary: "#ffffff",
      complementary: "#111827",
      complementaryLight: "#1e293b",
      // complementaryDark: "",
      brand: "#4f46e5",
      brandLight: "#6366f1",
      brandDark: "#3730a3",
      success: "#22c55e",
      // warning: "",
      error: "#f87171",
    }, 
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fontWeights: {
      light: "300",
      normal: "500",
      bold: "600",
      bolder: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  // MEDIA: Setup custom reusable breakpoints: https://stitches.dev/docs/api#media
  // REMINDER: https://cdn-wp-dhali.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/09/12112752/Min-Width_versus_Max_Width_Diagram.png
  media: {
    // MAX-WIDTH: WEBAPP-FIRST APPROACH (anything above 1280px is the default width)
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",   

    // MIN-WIDTH: MOBILE-FIRST APPROACH (anything from 0px to 640px is the default width)
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
  // DEV UTILITIES: Like setting custom css properties (paddingX = paddingLeft & paddingRight) https://stitches.dev/docs/api#utils
  utils: {},
  // PREFIX CLASSNAMES: Avoid global clashes - https://stitches.dev/docs/api#prefix
  prefix: {},
  // DEFINE CUSTOM MAPPING: https://stitches.dev/docs/api#thememap
  themeMap: {}
});

