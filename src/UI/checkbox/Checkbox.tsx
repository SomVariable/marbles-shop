import styles from './Checkbox.module.scss';

const Checkbox: React.FC = () => {
  return (
  <div className={styles.wrap__checkbox}>
  <input id='checkbox' className={styles.checkbox__input} type="checkbox" name="checkbox"/>
  <label htmlFor='checkbox' className={styles.checkbox__label}></label>
  </div>
  )
}
export default Checkbox;