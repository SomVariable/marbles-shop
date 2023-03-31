import styles from './Header.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Icon from '../../UI/Icon/Icon';
import logo from './logo.png';
import cn from 'classnames';
import { ChangeEvent } from 'react';
import { useState } from 'react';

const Header = () => {
  const [value, setValue] = useState('');
  const [activeLink, setActiveLink] = useState(false);
  const [asidePanel, setAsidePanel] = useState(false);

  const asideShow = () => {
    setAsidePanel(true)
  }

  const asideHide = () => {
    setAsidePanel(false)
  }

  const list = [
    {clazz: styles.listItem, content: 'Акции', id: 1},
    {clazz: styles.listItem, content: 'Доставка', id: 2},
    {clazz: styles.listItem, content: 'Контакты', id: 3},
    {clazz: styles.listItem, content: 'Галерея', id: 4},
    {clazz: styles.listItem, content: 'Отзывы', id: 5},
  ]

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.headerContent}>    
      <a className={styles.logo} href="#">
        <picture>
          <source src='#'/>
          <img src={logo} alt="You will see logo" width = '86.02px' height = '43.49px'/>
        </picture>
      </a>
      <div className={styles.burger}>
        <Button onClick = {asideShow} className={styles.burger} isOption = {true} appearance = {'option'}/>
      </div>
      <div className={styles.catalog}>
        <Button isOption = {true} appearance = {'option'} children = {'Каталог'}/>
      </div>    
        <Input className={styles.inputSize} isSearch = {true} placeholder = {'Поиск'} value = {value} setValue = {onChange}/>
      <div className={cn(styles.menu, {[styles.activeMenu]: asidePanel === true})}>
        <div className={cn(styles.menuBlock, {[styles.menuBlockActive]: asidePanel === true})}>
          <button onClick={asideHide} className={styles.close}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.70465 3.01501L3.01465 3.70501L11.3096 12L3.01465 20.295L3.70465 20.985L11.9996 12.69L20.2946 20.985L20.9846 20.295L12.6896 12L20.9846 3.70501L20.2946 3.01501L11.9996 11.31L3.70465 3.01501Z" fill="black"/>
            </svg>
          </button>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {
                list.map(({clazz, content, id}) => {
                  return <li className={styles.li} key={id}><a className={cn(clazz, {[styles.active]: activeLink === true })} href="#">{content}</a></li>
                })
              } 
            </ul>
          </nav>
          <div className={styles.info}>
            <div className={styles.hr}></div>
            <div className={styles.socialTitle}>Телефон</div>
            <a href="tel:65465675678" className={styles.phone}>+6 546 567 56 78</a>
            <div className={styles.socialTitle}>Мы в соц. сетях</div>
            <div className={styles.socialBlock}>
              <Icon type = {'instagram'}/>
              <Icon type = {'shit'}/>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
      <a className={styles.proc} href='#'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.39961 3.23999C4.83148 3.23999 4.37164 3.63796 4.07211 4.16249C3.77258 4.68702 3.59961 5.36905 3.59961 6.11999C3.59961 6.87093 3.77258 7.55296 4.07211 8.07749C4.37164 8.60202 4.83148 8.99999 5.39961 8.99999C5.96773 8.99999 6.42758 8.60202 6.72711 8.07749C7.02664 7.55296 7.19961 6.87093 7.19961 6.11999C7.19961 5.36905 7.02664 4.68702 6.72711 4.16249C6.42758 3.63796 5.96773 3.23999 5.39961 3.23999ZM12.2059 3.27374L4.92711 14.7262H5.75961L13.0271 3.27374H12.2059ZM5.39961 3.95999C5.62742 3.95999 5.88758 4.12312 6.10836 4.51124C6.32914 4.89937 6.47961 5.48015 6.47961 6.11999C6.47961 6.75983 6.32914 7.34062 6.10836 7.72874C5.88758 8.11687 5.62742 8.27999 5.39961 8.27999C5.1718 8.27999 4.91164 8.11687 4.69086 7.72874C4.47008 7.34062 4.31961 6.75983 4.31961 6.11999C4.31961 5.48015 4.47008 4.89937 4.69086 4.51124C4.91164 4.12312 5.1718 3.95999 5.39961 3.95999ZM12.5996 8.99999C12.0315 8.99999 11.5716 9.39796 11.2721 9.92249C10.9726 10.447 10.7996 11.1291 10.7996 11.88C10.7996 12.6309 10.9726 13.313 11.2721 13.8375C11.5716 14.362 12.0315 14.76 12.5996 14.76C13.1677 14.76 13.6276 14.362 13.9271 13.8375C14.2266 13.313 14.3996 12.6309 14.3996 11.88C14.3996 11.1291 14.2266 10.447 13.9271 9.92249C13.6276 9.39796 13.1677 8.99999 12.5996 8.99999ZM12.5996 9.71999C12.8274 9.71999 13.0876 9.88312 13.3084 10.2712C13.5291 10.6594 13.6796 11.2401 13.6796 11.88C13.6796 12.5198 13.5291 13.1006 13.3084 13.4887C13.0876 13.8769 12.8274 14.04 12.5996 14.04C12.3718 14.04 12.1116 13.8769 11.8909 13.4887C11.6701 13.1006 11.5196 12.5198 11.5196 11.88C11.5196 11.2401 11.6701 10.6594 11.8909 10.2712C12.1116 9.88312 12.3718 9.71999 12.5996 9.71999Z"/>
        </svg>
      </a>
      <a className={styles.basket} href="#">
        <Icon type="basket"/>  
        <span className={styles.basketCircle}>0</span>
      </a>
    </div>
  )
}
export default Header;