import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage, SignupPage } from './routes'
import routes from './routes/routes'
import { AuthProvider } from './contexts/authContext'
const App = () => {
  return (
<<<<<<< HEAD
    <UserProvider >
      <BrowserRouter>
=======
    <AuthProvider>
      <Router>
>>>>>>> 9245d378fd1d51feab220f2349deb9d0806b1013
        <Routes>
          <Route path={routes._auth.signup} element={<SignupPage />} />
          <Route path={routes._auth.login} element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
