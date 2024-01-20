import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignupPage, LoginPage, HomePage } from './routes';
import URL from './routes/routes'
import {UserProvider}  from './contexts/authContext';


const App = () => {
  return (
    <UserProvider   >
      <BrowserRouter>
        <Routes>
          <Route path={URL._base.main} element={<HomePage />} />
          <Route path={URL._auth.signup} element={<SignupPage />} />
          <Route path={URL._auth.login} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
export default App
