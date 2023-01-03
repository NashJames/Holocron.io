/* eslint-disable no-unused-vars */
import { IBM_Plex_Mono, Text_Me_One } from '@next/font/google'
import { responsiveFontSizes, experimental_extendTheme as extendTheme } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation' // extend the typings so that `theme.vars` is accessible.

const textMeOne = Text_Me_One({ weight: '400', subsets: ['latin'] })
const IBMPlexMono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] })

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    square: true
  }
}

export const theme = responsiveFontSizes(
  extendTheme({
    typography: {
      fontFamily: `${textMeOne.style.fontFamily}`,
    },
    colorSchemes: {
      dark: {
        palette: {
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
      },
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
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: `${IBMPlexMono.style.fontFamily}`,
            fontSize: '0.8rem',
          },
        },
      },
    },
  })
) as ReturnType<typeof extendTheme>
