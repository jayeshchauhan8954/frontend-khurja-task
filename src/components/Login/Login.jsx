import React, { useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';

// context
import { UserContext } from '../../contexts/authContext';
import { postData } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

const Login = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(UserContext);

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
  const showMsgAndRedirectToHome = (msg) => {
    window.alert(msg);
    navigate(routes._main.home)
  }
  const showErrMsgAndRedirect = (status, msg) => {
    window.alert(`${msg} with status code ${status}`)
    navigate(routes._auth.login)
  }
  const handleLogin = async () => {
    try {
      const { email, password } = data;
      const dataToLogin = { email, password }
      const response = await postData('intern/api/v1/auth/signin', dataToLogin)
      // console.log(response.headers.accesstoken, 'this is response headers')
      let token;
      if (response) {
        token = Cookies.get('accessToken');
        console.log(token, "this is accessToken from cookies");
      }

      // localStorage.setItem('accesstoken', response.data.accessToken);
      // console.log(response.data.data);
      showMsgAndRedirectToHome(response.data.message);
    } catch (error) {
      console.log(error.response.data.message)
      console.log(error.response.status)
      showErrMsgAndRedirect(error.response.status, error.response.data.message)
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
          Login
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={data.email}
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
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
            onClick={() => navigate(routes._auth.signup)}
          >
            Go to Signup
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
