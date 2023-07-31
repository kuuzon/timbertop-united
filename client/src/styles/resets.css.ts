import { globalStyle } from '@vanilla-extract/css';

// Box-sizing rules
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box"
})

// Remove default margin
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: 0
})

// 

globalStyle("body", {
  margin: 0,
  padding: 0,
  border: 0,
  minHeight: "100vh",
  // ...
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block"
});