import React from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: "primary" | "secondary";
}

function Button({appearance, className, children}: IButtonProps) : JSX.Element{
  return (
    <button className = {cn(styles.button, className, {
      [styles.primary]: appearance == 'primary',
      [styles.secondary]: appearance == 'secondary',
  })}>
    {children}
    </button>
  )
}

export default Button