import styles from './MainCard.module.scss';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
import cn from 'classnames';

interface Props {
  src: string;
  price: number;
  oldPrice: number;
  discount: number;
  content: string;
}

const MainCard = ({src, price, oldPrice, discount, content}:Props) => {

  const [hover, setHover] = useState(false);

  const onMove = () => {
    setHover(true) 
  }
  const onLeave = () => {
    setHover(false)
  }
  return (
    <div onMouseEnter={onMove} onMouseLeave={onLeave} className={styles.card}>
      <picture className={styles.cardWrap}>
         <source src='#'/>
         <img src={src} alt="sales lider" />
         <div className={styles.discount}>{discount}%</div>
      </picture>
      <div className={styles.priceBlock}>
        <span className={styles.price}>{price}грн</span>
        <span className={styles.oldPrice}>{oldPrice}</span>
        <div className={cn(styles.inBasket,{[styles.activeButton]: hover === true})}>
          <Button appearance='secondary' >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.59961 3.59998V9.59998H3.59961V10.4H9.59961V16.4H10.3996V10.4H16.3996V9.59998H10.3996V3.59998H9.59961Z" fill="#FF32A1"/>
              <rect x="0.25" y="0.25" width="19.5" height="19.5" rx="9.75" stroke="#FF32A1" strokeWidth="0.5"/>
            </svg>
            <span>Добавить в корзину</span>
          </Button>
        </div>
        <div className={styles.discountInBlock}>{discount}%</div>
      </div>
      <a href="#" className={styles.cardLink}>{content}</a>
    </div>
  )
}
export default MainCard;