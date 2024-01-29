import React, { useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

// context things
import { UserContext } from '../../contexts/authContext';
import { postData } from '../../api/axios';

const Signup = () => {
  const { data, setData } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    setData({
      name: '',
      email: '',
      userName: '',
      phone: '',
      password: ''
    });
  }, [setData]); 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSignup = async() => {
    try { 
      const response = await postData('intern/api/v1/auth/signup',data)
      // console.log(response)
    } catch (error) {
     console.log(error.message) 
    }
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
            value={data.name}
            onChange={handleInputChange}
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
            value={data.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            value={data.userName}
            onChange={handleInputChange}
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
            value={data.phone}
            onChange={handleInputChange}
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
            value={data.password}
            onChange={handleInputChange}
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
            onClick={()=>navigate(routes._auth.login)}
          >
            Go to Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
