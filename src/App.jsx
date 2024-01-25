import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage, SignupPage, HomePage, Slidebar } from './routes'
import routes from './routes/routes'
import { AuthProvider } from './contexts/authContext'
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={routes._auth.signup} element={<SignupPage />} />
          <Route path={routes._auth.login} element={<LoginPage />} />
          <Route path={routes._auth.home} element={<HomePage/>}/>
          <Route path={routes._auth.slidebar} element={<Slidebar/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
