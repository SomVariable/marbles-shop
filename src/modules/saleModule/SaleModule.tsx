import styles from './SaleModule.module.scss';
import Button from '../../UI/Button/Button';

const SaleModule = () => {

  return (
    <section className={styles.sale}>
     <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        Распродажа
        </h1>
        <h2 className={styles.subTitle}>
        в честь Нового года!
        </h2>
        <div className={styles.buttonWrap}>
          <Button appearance = {'primary'} isOption = {false} className ={styles.primary}> 
            <div className={styles.show}>Покажите</div>
            <div className={styles.all}>Все акции</div>
          </Button>
          <Button appearance = {'primary'} isOption = {false} className ={styles.more}>
            Подробнее
          </Button>
        </div>
     </div>
    </section>
  )
}
export default SaleModule;