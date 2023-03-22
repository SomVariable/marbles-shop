import styles from './Title.module.scss';

type Props = {
  children: string;
}
const Title: React.FC<Props> = ({children}) => {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  )
}
export default Title;