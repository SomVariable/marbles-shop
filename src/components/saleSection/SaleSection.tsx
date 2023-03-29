import styles from './SaleSection.module.scss';
import Button from '../../UI/Button/Button';

const SaleSection = () => {

  let text: string = 'Покажите';

  if (window.screen.availWidth >= 576) {
    text = 'Все акции';
  }

  return (
    <section className={styles.sale}>
      <h1 className={styles.mainTitle}>
      Распродажа
      </h1>
      <h2 className={styles.subTitle}>
      в честь Нового года!
      </h2>
      <div className={styles.buttonWrap}>
        <Button appearance = {'primary'} isOption = {false} className ={styles.primary}> 
          {text}
        </Button>
        <Button appearance = {'primary'} isOption = {false} className ={styles.more}>
          Подробнее
        </Button>
      </div>
    </section>
  )
}
export default SaleSection;