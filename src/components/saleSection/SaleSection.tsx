import style from './SaleSection.module.scss';

const SaleSection: React.FC = () => {
  return (
    <section className={style.sale}>
      <h1 className={style.main__title}>Распродажа</h1>
      <h2 className={style.main__subtitle}>в честь Нового года!</h2>
      <div className={style.wrap__button}>
        <button className={style.stock}>Все акции</button>
        <button className={style.more}>Подробнее</button>
      </div>
    </section>
  )
}

export default SaleSection;