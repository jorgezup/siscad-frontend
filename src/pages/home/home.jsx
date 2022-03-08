import React from 'react'
import Layout from '../../components/Layout/layout'
import styles from './styles.module.scss'
import image1 from './images/image1.svg'
import image2 from './images/image2.svg'

export default function Home() {
  return (
    <Layout>
      <div style={{minHeight: '80vh'}} >
        <div className={styles.header}>
          <h2>Seja bem-vindo, <span>Nome Professor</span></h2>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={image2} alt="" />
          </div>
          <div className={styles.title}>
            <h1>SISCAD</h1>
            <p>Sistema de gerenciamento acadêmico</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
