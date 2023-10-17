import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const alertDialogOverlay = style({
  backgroundColor: "#000000",
  position: "fixed",
  inset: 0,
  animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)"
})

export const alertDialogContent = style({
  backgroundColor: vars.colors.primary,
  borderRadius: 6,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  maxHeight: "85vh",
  padding: 25,
  animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",


})

// .AlertDialogContent:focus {
//   outline: none;
// }

// .AlertDialogTitle {
//   margin: 0;
//   color: var(--mauve-12);
//   font-size: 17px;
//   font-weight: 500;
// }

// .AlertDialogDescription {
//   margin-bottom: 20px;
//   color: var(--mauve-11);
//   font-size: 15px;
//   line-height: 1.5;
// }

// .Button {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   padding: 0 15px;
//   font-size: 15px;
//   line-height: 1;
//   font-weight: 500;
//   height: 35px;
// }
// .Button.violet {
//   background-color: white;
//   color: var(--violet-11);
//   box-shadow: 0 2px 10px var(--black-a7);
// }
// .Button.violet:hover {
//   background-color: var(--mauve-3);
// }
// .Button.violet:focus {
//   box-shadow: 0 0 0 2px black;
// }
// .Button.red {
//   background-color: var(--red-4);
//   color: var(--red-11);
// }
// .Button.red:hover {
//   background-color: var(--red-5);
// }
// .Button.red:focus {
//   box-shadow: 0 0 0 2px var(--red-7);
// }
// .Button.mauve {
//   background-color: var(--mauve-4);
//   color: var(--mauve-11);
// }
// .Button.mauve:hover {
//   background-color: var(--mauve-5);
// }
// .Button.mauve:focus {
//   box-shadow: 0 0 0 2px var(--mauve-7);
// }

// @keyframes overlayShow {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

// @keyframes contentShow {
//   from {
//     opacity: 0;
//     transform: translate(-50%, -48%) scale(0.96);
//   }
//   to {
//     opacity: 1;
//     transform: translate(-50%, -50%) scale(1);
//   }
// }