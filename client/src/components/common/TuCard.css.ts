import { style, createContainer } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

const card = createContainer();

export const container = style({
  marginTop: "1rem",
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  containerType: "inline-size",
  containerName: card,
})

export const leadCard = style({
  margin: "auto",
  padding: "2rem",
  border: `2px solid ${vars.colors.primaryContrast}`,
  borderRadius: vars.borderRadius['1x'],
  boxShadow: `0 2px 8px rgba(0, 0, 0, 0.2)`,
  textAlign: "center",
})

export const generalForm = style({
  width: "90%",
  '@container': {
    [`${card} (min-width: 480px)`]: {
      width: "80%"
    },
    [`${card} (min-width: 768px)`]: {
      width: "75%"
    },
    [`${card} (min-width: 1024px)`]: {
      width: "50%"
    },
  },
})

export const authForm = style({
  width: "75%",
  '@container': {
    [`${card} (min-width: 480px)`]: {
      width: "60%"
    },
    [`${card} (min-width: 768px)`]: {
      width: "40%"
    },
    [`${card} (min-width: 1024px)`]: {
      width: "25%"
    },
  },
})

export const cardTitle = style({
  color: vars.colors.brand,
  paddingBottom: "1rem",
  fontSize: "2em",
  fontWeight: vars.fontWeights.bold
})