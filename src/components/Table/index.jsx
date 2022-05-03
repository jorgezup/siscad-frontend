import React from "react";
import { FiUserPlus, FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import subjects from "../../data/subjects";

export default function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Cód. Disciplina</th>
          <th>Disciplina</th>
          <th>Carga Horária</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject) => (
          <tr key={subject.cod}>
            <td>{subject.cod}</td>
            <td>{subject.subjectName}</td>
            <td>{subject.workload}h</td>
            <td>
              <Link to={`/editar-disciplina/${subject.cod}`}>
                <i name="edit" title="Editar Disciplina">
                  <FiEdit3 />
                </i>
              </Link>
              <Link to={`/${subject.cod}/adicionar-aluno`}>
                <i name="addStudent" title="Adicionar Aluno">
                  <FiUserPlus />
                </i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
