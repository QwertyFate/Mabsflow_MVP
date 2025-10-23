import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="sm" padding={2} style={{backgroundColor: 'red', textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' , padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My MUI React App
      </Typography>
      <Button variant="contained">Click Me</Button>
    </Container>
  );
}

export default App;
