import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'

import styles from './styles.module.scss'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
