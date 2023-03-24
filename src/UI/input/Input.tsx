import styles from './Input.module.scss';
import classNames from 'classnames';

type Props = {
  type: string;
  placeholder: string;
  className: string;
}

const Input: React.FC<Props> = ({type, placeholder, className}) => {
  return <input className={classNames(styles.input, className)} type={type} placeholder = {placeholder}/>
}
export default Input;