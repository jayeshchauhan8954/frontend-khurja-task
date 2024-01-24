import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Login from '../../components/Login/Login'
export default function LoginPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Login />
        </Box>
      </Container>
    </React.Fragment>
  );
}
