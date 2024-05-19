import { createMuiTheme, withTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen, orange, purple, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#800080',
      main: '#b43757',
      dark: '#81007f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#b2ff59',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme