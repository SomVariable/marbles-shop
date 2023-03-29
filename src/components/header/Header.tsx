import logo from './logo.png';
import { ChangeEvent } from 'react';
import './Header.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { useState } from 'react';
import headerStyle from './Header.module.scss';
import cn from 'classnames';
import Icon from '../../UI/Icon/Icon'
import SubHeader from '../subHeader/SubHeader';

const Header = () => {
  const [value, setValue] = useState('');
  const [activeLink, setActiveLink] = useState(false);
  const [asidePanel, setAsidePanel] = useState(false);

  const list = [
    {clazz: headerStyle.listItem, content: 'Акции', id: 1},
    {clazz: headerStyle.listItem, content: 'Доставка', id: 2},
    {clazz: headerStyle.listItem, content: 'Контакты', id: 3},
    {clazz: headerStyle.listItem, content: 'Галерея', id: 4},
    {clazz: headerStyle.listItem, content: 'Отзывы', id: 5},
  ]
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
     setValue(e.target.value);
  }
  const asideShow = () => {
    setAsidePanel(true)
  }
  const asideHide = () => {
    setAsidePanel(false)
  }
  let placeholder = 'Поиск';
  if(window.screen.availWidth >= 320 && window.screen.availWidth <= 576) {
    placeholder = 'Поиск по сайту'
  }

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.headerTop}>
        <div className={headerStyle.logo}>
          <a href="#">
            <picture>
              <source src='#'/>
              <img src={logo} alt="You will see logo" width = '86.02px' height = '43.49px'/>
            </picture>
          </a>
        </div>
        <button onClick = {asideShow}  className={headerStyle.burger}>
            <svg className = {headerStyle.burger2} width="35" height="35" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="7" width="11" height="2" rx="1" />
            <rect x="5" y="11" width="7" height="2" rx="1"/>
            </svg>
        </button>
        <Button className={headerStyle.headerButton} isOption = {true} appearance = {'option'} children = {'Каталог'} />
        <Input className={headerStyle.inputSize} isSearch = {true} placeholder = {placeholder} value = {value} setValue = {onChange}/>
        <div className={cn(headerStyle.menu, {[headerStyle.activeMenu]: asidePanel === true})}>
          <div className={cn(headerStyle.menuBlock, {[headerStyle.menuBlockActive]: asidePanel === true})}>
            <button onClick={asideHide} className={headerStyle.close}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.70465 3.01501L3.01465 3.70501L11.3096 12L3.01465 20.295L3.70465 20.985L11.9996 12.69L20.2946 20.985L20.9846 20.295L12.6896 12L20.9846 3.70501L20.2946 3.01501L11.9996 11.31L3.70465 3.01501Z" fill="black"/>
              </svg>
            </button>
            <nav>
              <ul className={headerStyle.list}>
                {
                  list.map(({clazz, content, id}) => {
                    return <li className={headerStyle.li} key={id}><a className={cn(clazz, {[headerStyle.active]: activeLink === true })} href="#">{content}</a></li>
                  })
                } 
              </ul>
            </nav>
            <div className={headerStyle.info}>
              <div className={headerStyle.hr}></div>
              <div className={headerStyle.socialTitle}>Телефон</div>
              <a href="tel:65465675678" className={headerStyle.phone}>+6 546 567 56 78</a>
              <div className={headerStyle.socialTitle}>Мы в соц. сетях</div>
              <div className={headerStyle.socialBlock}>
                <Icon type = {'instagram'}/>
                <Icon type = {'shit'}/>
              </div>
            </div>
          </div>
          <div className={headerStyle.overlay}></div>
        </div>
        <a className={headerStyle.proc} href='#'>%</a>
        <a className={headerStyle.basket} href="#">
           <Icon type='basket'/>  
           <span className={headerStyle.basketCircle}>0</span>
        </a>
      </div>
      <SubHeader/>
    </header>
  )
}
export default Header;