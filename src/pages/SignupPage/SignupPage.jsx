import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Signup from '../../components/Signup/Signup';
export default function SignupPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Signup />
        </Box>
      </Container>
    </React.Fragment>
  );
}
