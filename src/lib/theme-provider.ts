/* eslint-disable no-unused-vars */

import { createTheme, responsiveFontSizes, Theme } from '@mui/material'
import { IBM_Plex_Mono, Text_Me_One } from 'next/font/google'

const TextMeOne = Text_Me_One({ weight: '400', subsets: ['latin'] })
const IBMPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] })

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    square: true
  }
}

export const darkTheme: Theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: TextMeOne.style.fontFamily,
    },
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
            fontFamily: IBMPlexMono.style.fontFamily,
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'square' },
            style: {
              height: '28px',
              borderRadius: '7px',
              border: '1px solid rgb(107 114 128)',
              fontFamily: IBMPlexMono.style.fontFamily,
              color: '#FFFFFF',
            },
          },
        ],
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: IBMPlexMono.style.fontFamily,
            fontSize: '0.8rem',
          },
        },
      },
    },
  })
)
