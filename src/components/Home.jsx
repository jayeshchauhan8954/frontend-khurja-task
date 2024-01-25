import React from 'react'
import { Link } from 'react-router-dom'
import URL from '../routes/routes'
import {UserContext} from '../contexts/authContext'
import { useContext } from 'react'
// import {AppBar,Toolbar,Typography} from '@mui/material';
const Home = () => {
    const { userData } = useContext(UserContext);
    console.log(userData.email, 'this is email in home page')
    return ( 

        <div>
            {/* <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          Logo
        </Typography>
      
      <button variant='contained' color ='blue'>Home</button>
      <button variant='contained' color ='blue'>About Us</button>
      <button variant='contained' color ='blue'>Contact</button>
     </Toolbar>
      </AppBar> */}
            <Link to={URL._task.create} ><button>Go To SingUp Page</button></Link>
            {
                <><h1>{userData.email}</h1><h1>{userData.name}</h1><h1>{userData.phone}</h1><h1>{userData.userName}</h1><h1>{userData.userType}</h1></>
            }
        </div>
    )
}

export default Home
