<<<<<<< HEAD
import React from 'react'
// import Home from '../../components/Home/Home'
import Homemain from '../../components/Home/Home';
const HomePage = () => {
  return (
    <div>
      <Homemain/>
    </div>
=======
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes/routes'
import Navbar from '../../components/Navbar/Navbar'
import { UserContext } from '../../contexts/authContext';

const HomePage = () => {
  const { data, setData } = useContext(UserContext);
  console.log('this is current data',data)
  return (
    <React.Fragment>
        <Navbar/>
      <h1>hello this is home page</h1>
      <h1>{data.email || 'no data'}</h1>     
      <Link to={routes._auth.signup}>go to signup page</Link>
    </React.Fragment>
>>>>>>> fed9f1ef5b83cb2a18b8816b3c93f5f8c1d52a79
  )
}

export default HomePage
