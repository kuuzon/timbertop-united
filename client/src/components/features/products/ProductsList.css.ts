import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const gridContainer = style({
  margin: `${vars.space['8x']} 0`,
  width: "100%",
})

export const productGrid = style({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
})