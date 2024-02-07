import { createTheme } from '@mui/material'
import { green, orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontSize: 16,
  },
})

export default theme
