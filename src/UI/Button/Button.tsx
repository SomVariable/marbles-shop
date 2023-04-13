import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

export interface IButtonProps extends Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "children" | "onClick"> {
  appearance: "primary" | "secondary" | "option" | "shadow" | "none";
  isOption?: boolean
}

function Button({appearance, isOption = false, className, onClick, children}: IButtonProps) : JSX.Element{
  return (
    <button className = {cn(styles.button, className, {
      [styles.primary]: appearance == 'primary',
      [styles.secondary]: appearance == 'secondary',
      [styles.option]: appearance == 'option',
      [styles.shadow]: appearance == 'shadow',
      [styles.none]: appearance == "none",
  })} onClick = {onClick}>
    {!isOption ||<svg className = {styles.optionFrame} width="35" height="35" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="7" width="11" height="2" rx="1" />
        <rect x="5" y="11" width="7" height="2" rx="1"/>
        </svg>
        }
    <p className = {styles.text}>{children}</p>
    </button>
  )
}

export default Button