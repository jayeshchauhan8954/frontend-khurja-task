import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {Home, Phone} from '@mui/icons-material'
const Homemain = () => {
  return (
      <div>
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          Your Logo
        </Typography>
        <Button color="inherit"  endIcon={<Home/>}>Home</Button>
        <Button color="inherit" >About</Button>
        <Button color="inherit" >Services</Button>
        <Button color="inherit" endIcon={<Phone/>}>Contact</Button>
      </Toolbar>
    </AppBar>
    <a href="/signup"><Button color="secondary" variant="contained" style={{marginTop:"100px",marginLeft:"45%"}}>go to signup</Button></a>
    <a href="/login"><Button color="secondary" variant="contained" style={{marginTop:"100px",marginLeft:"45%"}}>go to login</Button></a>
    </div>
  );
};

export default Homemain;
