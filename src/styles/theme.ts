import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: "#FFBA08",
    gray: {
      "800": "#47585B",
      "500": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800'
      }
    }
  }
})