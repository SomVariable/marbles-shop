import React from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: "primary" | "secondary";
  isOption?: boolean
}

function Button({appearance, isOption = false, className, children}: IButtonProps) : JSX.Element{
  return (
    <button className = {cn(styles.button, className, {
      [styles.primary]: appearance == 'primary',
      [styles.secondary]: appearance == 'secondary',
  })}>
    {isOption ||<svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="7" width="11" height="2" rx="1" />
        <rect x="9" y="11" width="7" height="2" rx="1"/>
        </svg>
        }
    {children}
    </button>
  )
}

export default Button