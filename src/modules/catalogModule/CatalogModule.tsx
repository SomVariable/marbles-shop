import Hheader from '../../UI/Hheader/Hheader';
import styles from './CatalogModule.module.scss';
import {Link} from 'react-router-dom';
import heart from './heart.png';
import buble from './for320card.png';
import PopularCard from '../../components/popularCard/PopularCard';

const CatalogModule = () => {
  const categoryArr = [
    {src: buble, path: '#', content: 'Баблобоксы', id: 1 },
    {src: buble, path: '#', content: 'Фонтаны с цифрами', id: 2 },
    {src: buble, path: '#', content: 'Готовые композиции', id: 3 },
    {src: buble, path: '#', content: 'Шарики, наборы, оформление комнаты на выписку', id: 4 },
    {src: heart, path: '#', content: 'Латексные шары', id: 5 },
    {src: heart, path: '#', content: 'Шарики на день рождения', id: 6 },
    {src: heart, path: '#', content: 'Фольгированые шары', id: 7 },
    {src: heart, path: '#', content: '3D Сферы, Bubble', id: 8 },
  ]

  return(
    <section className={styles.catalogSection}>
      <div className={styles.container}>
      <Hheader className={styles.catalog} type="h2">
        Каталог
     </Hheader>
     <div className={styles.linkBlock}>
      <Link className={styles.main} to={'/'}>Главная</Link>
      /
      <Link className={styles.mainCatalog} to={'/catalog'}>Каталог</Link>
     </div>
     <div className={styles.cardWrapper}>
        {
          categoryArr.map(({src, path, content, id}) => {
            return <PopularCard key={id} src ={src} path ={path} content = {content}/>
          })
        }
     </div>
      </div>
    </section>
  )
}
export default CatalogModule;