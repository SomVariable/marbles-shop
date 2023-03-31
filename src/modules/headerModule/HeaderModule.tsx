import styles from './HeaderModule.module.scss';
import Header from '../../components/header/Header';

const HeaderModule = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Header/>
      </div>
    </header>
  )
}
export default HeaderModule;