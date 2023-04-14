import Hheader from '../../UI/Hheader/Hheader';
import styles from './SaleModule.module.scss';
import Button from '../../UI/Button/Button';


const SaleModule = () => {

  return (
    <section className={styles.sale}>
     <div className={styles.container}>
      <Hheader type='h1' className={styles.mainTitle}>
        Распродажа
        </Hheader>
        <Hheader type='h2' className={styles.subTitle}>
        в честь Нового года!
        </Hheader>
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