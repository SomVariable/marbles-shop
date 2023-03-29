import styles from './SubHeader.module.scss';
import Icon from '../../UI/Icon/Icon';
import cn from 'classnames';

const SubHeader = () => {

const list = [
  {clazz: styles.subItem, content: 'Латексные шары', id: 1},
  {clazz: styles.subItem, content: 'Фольгированые шары', id: 2},
  {clazz: styles.subItem, content: 'Цифры', id: 3},
  {clazz: styles.subItem, content: '3D Сферы', id: 4},
  {clazz: styles.subItem, content: 'Хромовые шары', id: 5},
]

  return (
    <div className={styles.subHeader}>
      <nav className={styles.subNav}>
        <ul className={styles.subList}>
          {
          list.map(({clazz, content, id}) => {
             return <li className={styles.subLi} key={id}><a className={cn(clazz)} href="#">{content}</a></li>
          })
         }   
        </ul>
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