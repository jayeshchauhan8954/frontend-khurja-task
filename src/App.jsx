import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage, SignupPage,HomePage, TaskPage } from './routes'
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
<<<<<<< HEAD
          <Route path={routes._auth.home} element={<HomePage/>}/>
=======
          <Route path={routes._main.home} element={<HomePage />} />
          <Route path={routes._task.getTask} element={<TaskPage />} />
>>>>>>> fed9f1ef5b83cb2a18b8816b3c93f5f8c1d52a79
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
