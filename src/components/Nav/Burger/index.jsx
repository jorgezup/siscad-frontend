import styles from './styles.module.scss'

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <div 
      className={styles.menu} 
      data-isopen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div />
      <div />
      <div />
    </div>
  )
}

export default Burger