import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const gridContainer = style({
  margin: `${vars.space['9x']} 0`,
  width: "100%",
})

export const productGrid = style({
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
})