import React from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'
import CustomIcon from '../Icon/Icon'

interface IInputProps extends Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "className" | "placeholder">{
    value: string,
    isSearch?: boolean,
    setValue: (event:React.ChangeEvent<HTMLInputElement>) => void,
    
}

function Input({value, setValue, isSearch = false, placeholder, className, ...props}: IInputProps) {

  return (
    <div className = {cn(styles.input, className)}>
      {isSearch && !value && <label htmlFor="inputField" className={styles.lable}><CustomIcon className = {styles.searchIcon} type='search'/></label>}
      <input type = "text" id = "inputField" className = {cn(styles.field, {
        [styles.search]: isSearch === true
      })} onChange = {setValue} value = {value} placeholder = {placeholder} {...props}/>
    </div>
  )
}

export default Input