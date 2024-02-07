import { Box, Button, Container, Typography } from '@mui/material'
import { blue, red } from '@mui/material/colors'

const App = () => {
  return (
    <Container>
      <h1>App</h1>
      <Typography variant="h1">h1 with Component</Typography>
      <Typography mt={10} variant="h1" component="h2" textAlign="center">
        title 2
      </Typography>
      <Typography variant="h1" component="span">
        span
      </Typography>
      <br />
      <Button variant="contained">My first button</Button>

      <Box sx={{ padding: '50px', color: 'blue' }}>
        This is a box component
        <Box color="red" component="span">
          Inside of a box
        </Box>
      </Box>
    </Container>
  )
}

export default App
