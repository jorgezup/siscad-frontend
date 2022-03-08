import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './src/App'
import Home from './src/pages/home/home'
import Login from './src/pages/login/login'
import MySubjects from './src/pages/mySubjects/mySubjects'
import NewSubject from './src/pages/newSubject/newSubject'
import './src/styles/global.scss'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/minhas-disciplinas" element={<MySubjects />} />
        <Route path="/cadastrar-disciplina" element={<NewSubject />} />
      </Routes>
    </BrowserRouter>
  )
}