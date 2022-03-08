import React from 'react'
import Navbar from '../Nav/Navbar'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Navbar />
    </header>
  )
}
