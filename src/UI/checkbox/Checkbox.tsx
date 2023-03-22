import styles from './Checkbox.module.scss';
type Props = {
  children: string
}
const Checkbox: React.FC<Props> = ({children}) => {
  return (
  <div className={styles.wrap__checkbox}>
  <input id='checkbox' className={styles.checkbox__input} type="checkbox" name="checkbox"/>
  <label htmlFor='checkbox' className={styles.checkbox__label}>{children}</label>
  </div>
  )
}
export default Checkbox;