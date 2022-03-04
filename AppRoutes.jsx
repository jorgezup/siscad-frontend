import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './src/App'
import Login from './src/pages/Login/login'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}