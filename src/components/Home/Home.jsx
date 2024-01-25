// import React from 'react'

// const Home = () => {
//     return (
//         <div>
//         <form>
            
//         </form>
         
//         </div>
//     )
// }

// export default Home
// Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          Your Logo
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Home;

