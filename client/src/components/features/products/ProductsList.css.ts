import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const gridContainer = style({
  maxWidth: "100%",
  margin: `${vars.space['8x']} 0`,
})

export const productGrid = style({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
})