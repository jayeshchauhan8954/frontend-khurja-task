import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

// context things
import { UserContext } from '../../contexts/authContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name ,setName] = useState('');
  const [userName,setuserName] = useState('');
  const [phone ,setphone] = useState('')
  
  let username, Name, Phone;

  // const {data,setData}=useContext(UserContext);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event)=>{
    setName (event.target.value);
  };

  const handleuserNameChange = (event)=>{
   setuserName(event.target.value); 
  };
  const handlephoneChange = (event)=>{
    setphone(event.target.value);
  };

  const handleSignup = () => {

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        style={{
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        <form
          style={{
            width: '100%',
            marginTop: '8px',
          }}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            value={userName}
            onChange={handleuserNameChange}
          />


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone No."
            type="text"
            id="phone"
            value={phone}
            onChange={handlephoneChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
            onClick={handleSignup}
          >
            Signup
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
