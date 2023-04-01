import styles from './HeaderModule.module.scss';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subHeader/SubHeader';

const HeaderModule = () => {
  return (
    <header className={styles.header}>  
      <div className={styles.container}>
        <Header/>
        <SubHeader/>
      </div>
    </header>
  )
}
export default HeaderModule;