import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage, SignupPage } from './routes'
import routes from './routes/routes'
import { AuthProvider } from './contexts/authContext'
import HomePage from './pages/HomePage/HomePage';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={routes._auth.signup} element={<SignupPage />} />
          <Route path={routes._auth.login} element={<LoginPage />} />
          <Route path={routes._auth.home} element={<HomePage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
