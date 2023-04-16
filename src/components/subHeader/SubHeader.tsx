import styles from './SubHeader.module.scss';
import Icon from '../../UI/Icon/Icon';
import logo from './logo.png';
import cn from 'classnames';
import {Link} from 'react-router-dom';

const SubHeader = () => {

  const list = [
  {clazz: styles.subLink, content: 'Латексные шары', id: 1},
  {clazz: styles.subLink, content: 'Фольгированые шары', id: 2},
  {clazz: styles.subLink, content: 'Цифры', id: 3},
  {clazz: styles.subLink, content: '3D Сферы', id: 4},
  {clazz: styles.subLink, content: 'Хромовые шары', id: 5},
]

  return (
    <div className={styles.subHeader}>
      <Link className={styles.logo} to={'/'}>
        <picture>
          <source src='#'/>
          <img src={logo} alt="You will see logo" width = '86.02px' height = '43.49px'/>
        </picture>
      </Link>
      
      <nav className={styles.nav}>      
        {
        list.map(({clazz, content, id}) => {
            return <div className={styles.subLi} key={id}><a className={cn(clazz)} href="#">{content}</a></div>
        })
        }   
      </nav>
      <a href="tel:65465675678" className={styles.phone}>
        <svg className={styles.svg} width="11" height="5" viewBox="0 0 11 5" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 3.76907L0.558318 0L0 0.805094L5.5 5L11 0.805094L10.4417 0L5.5 3.76907Z"/>
        </svg> +6 546 567 56 78
      </a>
      <div className={styles.socialBlock}>
         <Icon type = {'instagram'}/>
         <Icon type = {'shit'}/>
      </div>
      <div className={styles.workingMode}>
          <p className={styles.workTitle}>Режим работы</p>
          <p className={styles.workTitle2}>Круглосуточно</p>
      </div>
    </div>
  )
}
export default SubHeader;
