/* eslint-disable no-unused-vars */
import { createTheme, Theme } from '@mui/material'
import { IBM_Plex_Mono } from '@next/font/google'

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
})

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    square: true
  }
}

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffff',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#fb5f5f',
    },
    background: {
      default: '#191c20',
      paper: '#25292e',
    },
    divider: 'rgba(255,255,255,0.78)',
    contrastThreshold: 4.5,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          height: '26px',
          width: '26px',
          borderRadius: '7px',
          border: '1px solid #4d4f56',
          margin: '4px',
          fontFamily: `${IBMPlexMono.style.fontFamily}`,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'square' },
          style: {
            height: '26px',
            borderRadius: '7px',
            border: '1px solid #4d4f56',
            margin: '4px',
            fontFamily: `${IBMPlexMono.style.fontFamily}`,
            color: '#FFFFFF',
            paddingBottom: '5px',
          },
        },
      ],
    },
  },
})
