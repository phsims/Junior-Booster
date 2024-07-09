"use client"

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DF6751', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '32px',
      fontWeight: '500',
      color: '#808080',
    },
    body1: {
      fontSize: '1rem',
    },
  },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '4rem',
//           padding: '1rem 2rem',
//         },
//         sizeSmall: {
//             padding: '0.5rem 1rem'
//           }
//       },
//     },
//   },
});

export default theme;
