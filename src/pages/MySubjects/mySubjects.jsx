import React from "react";
import Layout from "../../components/Layout/layout";
import Table from "../../components/Table";
import styles from "./styles.module.scss";

export default function MySubjects() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Minhas Disicplinas</h1>
        <Table />
      </div>
    </Layout>
  );
}
