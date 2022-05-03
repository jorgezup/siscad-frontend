import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import students from "../../data/students";

import subjects from "../../data/subjects";

export default function AddStudentForm() {
  const { subjectCode } = useParams();
  const filteredSubject = subjects.filter(
    (subject) => subject.cod === subjectCode
  );
  return (
    <div className={styles.container}>
      <header>
        <h1>Adicionar Aluno</h1>
      </header>
      <form>
        <div className={styles.wrapper}>
          <span>Disciplina: </span>
          <span>{filteredSubject[0].subjectName}</span>
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="add-student">Alunos:</label>
          <select name="add-student" id="add-student">
            <option value="">--Selecione um aluno--</option>
            {students.map((student) => (
              <option value={student.id}>{student.name}</option>
            ))}
          </select>
        </div>
        <div className={styles.button}>
          <button type="button">Adicionar aluno</button>
        </div>
      </form>
    </div>
  );
}
