/* eslint-disable no-unused-vars */
import { IBM_Plex_Mono } from '@next/font/google'
import { createTheme, Theme } from '@mui/material'

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--ibm_plex_mono-font',
})

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    square: true
  }
}

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ff8080',
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
          borderRadius: '7px',
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
            fontFamily: `${IBMPlexMono.style.fontFamily}`,
            color: '#FFFFFF',
            paddingBottom: '5px',
          },
        },
      ],
    },
  },
})
