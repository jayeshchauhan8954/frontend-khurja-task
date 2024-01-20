import React from 'react'
import { Link } from 'react-router-dom'
import URL from '../routes/routes'
import {UserContext} from '../contexts/authContext'
import { useContext } from 'react'
const Home = () => {
    const { userData } = useContext(UserContext);
    console.log(userData.email, 'this is email in home page')
    return (

        <div>
            <Link to={URL._task.create} ><button>go to create task page</button></Link>
            {
                <><h1>{userData.email}</h1><h1>{userData.name}</h1><h1>{userData.phone}</h1><h1>{userData.userName}</h1><h1>{userData.userType}</h1></>
            }
        </div>
    )
}

export default Home
