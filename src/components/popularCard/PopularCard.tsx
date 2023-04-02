import styles from './PopularCard.module.scss';

interface Props  {
  src: string;
  path: string;
  content: string;
}

const PopularCard = ({src, path, content}: Props) => {
  return(
    <div className={styles.card}>
      <picture className={styles.imgWrap}>
       <source src='#'/>
       <img className={styles.img} src={src} alt="You will see popular product card" width='126px' height='180px'/>
      </picture>
      <a className={styles.cardLink} href={path}>{content}</a>
    </div>
  )
}
export default PopularCard;