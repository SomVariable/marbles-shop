import styles from './HeaderModule.module.scss';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subHeader/SubHeader';

const HeaderModule = () => {
  return (
    <header className={styles.header}>  
      <Header/>
      <SubHeader/>
    </header>
  )
}
export default HeaderModule;