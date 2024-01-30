import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage, SignupPage,HomePage, TaskPage } from './routes'
import routes from './routes/routes'
import { AuthProvider } from './contexts/authContext'
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={routes._auth.signup} element={<SignupPage />} />
          <Route path={routes._auth.login} element={<LoginPage />} />
          <Route path={routes._main.home} element={<HomePage />} />
          <Route path={routes._task.getTask} element={<TaskPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
