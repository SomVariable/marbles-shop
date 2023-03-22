import style from './Header.module.scss';
import logo from './logo.png';
import classNames from 'classnames';
import SubHeader from '../subheder/SubHeader';

const Header = () => {
  return (
    <header className={style.header}>
       <div className={style.content}>

        <div className={style.logo}>
          <picture>
            <source src='#'/>
            <a href="#">
             <img src={logo} alt="You will see logo" width={'86.02px'} height ={'43.49px'} />
            </a>
          </picture>
        </div>
        <button className={style.catalog}>Каталог</button>
        <div className={style.input__wrap}>
          <input className={style.input} type="text" placeholder='Поиск' />
         {/*  <button className={style.search}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.20005 0.600006C2.32427 0.600006 0.800049 2.12422 0.800049 4.00001C0.800049 5.87579 2.32427 7.40001 4.20005 7.40001C4.94224 7.40001 5.62817 7.16094 6.18755 6.75626L8.8188 9.38126L9.3813 8.81876L6.7813 6.21251C7.29224 5.61719 7.60005 4.84454 7.60005 4.00001C7.60005 2.12422 6.07583 0.600006 4.20005 0.600006ZM4.20005 1.00001C5.85942 1.00001 7.20005 2.34063 7.20005 4.00001C7.20005 5.65938 5.85942 7.00001 4.20005 7.00001C2.54067 7.00001 1.20005 5.65938 1.20005 4.00001C1.20005 2.34063 2.54067 1.00001 4.20005 1.00001Z" fill="black"/>
            </svg>
          </button> */}
        </div>

         <nav className={style.nav}>
          <ul className={style.list}>
            <li className={classNames(style.li, style.active)}><a href="#">Акции</a></li>
            <li className={style.li}><a href="#">Доставка</a></li>
            <li className={style.li}><a href="#">Контакты</a></li>
            <li className={style.li}><a href="#">Галерея</a></li>
            <li className={style.li}><a href="#">Отзывы</a></li>
          </ul>
        </nav>
        <a href="#">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 0.600006C11.679 0.600006 9.0001 3.27891 9.0001 6.60001V7.80001H4.25635L4.2001 8.32501L1.8001 29.325L1.7251 30H28.2751L28.2001 29.325L25.8001 8.32501L25.7438 7.80001H21.0001V6.60001C21.0001 3.27891 18.3212 0.600006 15.0001 0.600006ZM15.0001 1.80001C17.679 1.80001 19.8001 3.9211 19.8001 6.60001V7.80001H10.2001V6.60001C10.2001 3.9211 12.3212 1.80001 15.0001 1.80001ZM5.34385 9.00001H9.0001V10.3688C8.6415 10.5773 8.4001 10.957 8.4001 11.4C8.4001 12.0633 8.93682 12.6 9.6001 12.6C10.2634 12.6 10.8001 12.0633 10.8001 11.4C10.8001 10.957 10.5587 10.5773 10.2001 10.3688V9.00001H19.8001V10.3688C19.4415 10.5773 19.2001 10.957 19.2001 11.4C19.2001 12.0633 19.7368 12.6 20.4001 12.6C21.0634 12.6 21.6001 12.0633 21.6001 11.4C21.6001 10.957 21.3587 10.5773 21.0001 10.3688V9.00001H24.6563L26.9251 28.8H3.0751L5.34385 9.00001Z" fill="black"/>
          </svg>
        </a>
       </div>
       <SubHeader/>
    </header>
  )
}

export default Header;