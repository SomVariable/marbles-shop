import classNames from 'classnames';
import styles from './Checkbox.module.scss';

type Props = {
  children: string;
  classNameInput: string;
  classNameLabel: string;
}

const Checkbox: React.FC<Props> = ({children, classNameInput, classNameLabel}) => {
  return (
  <div className={styles.wrap__checkbox}>
  <input id='checkbox' className={classNames(styles.checkbox__input, classNameInput)} type="checkbox" name="checkbox"/>
  <label htmlFor='checkbox' className={classNames(styles.checkbox__label, classNameLabel)}>{children}</label>
  </div>
  )
}
export default Checkbox;