import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import styles from './styles.module.scss'


export default function Login() {
  return (
    <div className={styles.container}>
      <header>
        <img src={logo} alt="logo" />
        <h1>SISCAD</h1>
        <p>Sistema Acadêmico</p>
      </header>
      <form action="">
        <input type="email" name="" id="" />
        <input type="password" />
        <Link to="/">
          <button>Entrar</button>
        </Link>
      </form>
    </div>
  )
}
