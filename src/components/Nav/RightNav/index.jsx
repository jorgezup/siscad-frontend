import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const RightNav = ({ isOpen, setIsOpen }) => {
  const router = useLocation();
  return (
    <ul
      className={
        isOpen
          ? `${styles.ul} ${styles.active}`
          : `${styles.hidden} ${styles.ul}`
      }
      data-isopen={isOpen}
    >
      <li onClick={() => setIsOpen(false)}>
        <Link
          to="/"
          className={router.pathname === "/" ? styles.activeMenu : ""}
        >
          Início
        </Link>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <Link
          to="/minhas-disciplinas"
          className={
            router.pathname === "/minhas-disciplinas" ? styles.activeMenu : ""
          }
        >
          Minhas Disciplinas
        </Link>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <Link
          to="/cadastrar-disciplina"
          className={
            router.pathname === "/cadastrar-disciplina" ? styles.activeMenu : ""
          }
        >
          Cadastrar Nova Disciplina
        </Link>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <Link to="/login" className={styles.logout}>
          Sair
        </Link>
      </li>
    </ul>
  );
};

export default RightNav;
