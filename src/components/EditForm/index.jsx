import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

import subjects from "../../data/subjects";

export default function EditForm() {
  const { cod } = useParams();
  const filteredSubject = subjects.filter((subject) => subject.cod === cod);
  return (
    <div className={styles.container}>
      <header>
        <h1>Editar Disciplina</h1>
      </header>
      <form className={styles.newSubjectForm}>
        <div className={styles.wrapper}>
          <span>Código da disciplina:</span>
          <input
            type="text"
            id="subject-code"
            name="subject-code"
            defaultValue={filteredSubject[0].cod}
          />
        </div>

        <div className={styles.wrapper}>
          <span>Nome da disciplina: </span>
          <input
            type="text"
            name="subject-name"
            id="subject-name"
            defaultValue={filteredSubject[0].subjectName}
          />
        </div>

        <div className={styles.wrapper}>
          <div>
            <span>Carga horária:</span>
          </div>
          <div className={styles.radios}>
            <div>
              <input
                type="radio"
                id="34hours"
                name="workload"
                value="34hours"
                defaultChecked={
                  filteredSubject[0].workload === "34" ? "checked" : ""
                }
              />
              <label htmlFor="34hours">34 horas</label>
            </div>
            <div>
              <input
                type="radio"
                id="68hours"
                name="workload"
                value="68hours"
                defaultChecked={
                  filteredSubject[0].workload === "68" ? "checked" : ""
                }
              />
              <label htmlFor="68hours">68 horas</label>
            </div>
            <div>
              <input
                type="radio"
                id="102hours"
                name="workload"
                value="102hours"
                defaultChecked={
                  filteredSubject[0].workload === "102" ? "checked" : ""
                }
              />
              <label htmlFor="102hours">102 horas</label>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <label htmlFor="time-course-select">Período:</label>
          <select name="time-course" id="time-course-select">
            <option value="">--Selecione um opção--</option>
            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noite</option>
          </select>
        </div>

        <div className={styles.wrapper}>
          <label htmlFor="description-course">Ementa:</label>
          <textarea
            name="description-course"
            id="description-course"
            defaultValue={filteredSubject[0].description}
          ></textarea>
        </div>

        <div className={styles.button}>
          <button type="button">Editar</button>
        </div>
      </form>
    </div>
  );
}
