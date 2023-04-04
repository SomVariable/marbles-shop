import styles from './DiscountModule.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import girl from './girl.png';

import {useState} from 'react';

const DiscountModule = () => {
  const [value, setValue] = useState('');
 
  const onValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <section className={styles.discount}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.discountTitle}>
            Скидка 5% 
          </h2>
          <h3 className={styles.discountSub}>
          на первый заказ
          </h3>
          <form className={styles.discountForm}>
            <Input value ={value} setValue = {onValue} isSearch = {false} placeholder ={'+380'}/>
            <Button appearance = {'primary'} isOption = {false} children = {'Получить скидку'}/>
          </form>
        </div>
        <picture className={styles.img}>
          <source src='#'/>
          <img src={girl} alt="You will see girl with murbles" />
        </picture>
      </div>
    </section>
  )
}
export default DiscountModule;