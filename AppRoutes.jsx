import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./src/App";
import AddStudent from "./src/pages/AddStudent";
import EditSubject from "./src/pages/EditSubject";
import Home from "./src/pages/Home/home";
import Login from "./src/pages/Login/login";
import MySubjects from "./src/pages/MySubjects/mySubjects";
import NewSubject from "./src/pages/NewSubject/newSubject";
import "./src/styles/global.scss";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/minhas-disciplinas" element={<MySubjects />} />
        <Route path="/cadastrar-disciplina" element={<NewSubject />} />
        <Route path="/editar-disciplina/:cod" element={<EditSubject />} />
        <Route path="/:subjectCode/adicionar-aluno" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}
