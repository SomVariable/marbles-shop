import Hheader from '../../UI/Hheader/Hheader';
import styles from './PopularModule.module.scss';
import PopularCard from '../../components/popularCard/PopularCard';
import heart from './heart.png';
import buble from './for320card.png';


const PopularModule = () => {
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
    <section className={styles.popular}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <Hheader type='h2' className={styles.popularTitle}>Популярные категории</Hheader>
          <a href="#" className={styles.titleLink}>
            смотреть всё
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.905064 10.962C0.973111 10.961 1.0371 10.9326 1.08381 10.8838L6.28381 5.68383C6.38538 5.58227 6.38538 5.41774 6.28381 5.31617L1.08381 0.116174C1.01881 0.0481262 0.921314 0.0207052 0.830924 0.0450802C0.739517 0.0684395 0.668424 0.139533 0.645064 0.230939C0.620689 0.32133 0.648111 0.41883 0.716158 0.483829L5.73233 5.5L0.716158 10.5162C0.63897 10.5913 0.616627 10.7051 0.658267 10.8036C0.699908 10.9031 0.797408 10.9661 0.905064 10.962Z" fill="black"/>
            </svg>
          </a>
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
export default PopularModule;