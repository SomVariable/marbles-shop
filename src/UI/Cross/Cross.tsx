import React from 'react'
import cn from 'classnames'
import Button from '../Button/Button'
import styles from './Cross.module.scss'

interface ICrossProps extends  Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "children" | "onClick">{

}

function Cross({className, onClick} : ICrossProps) {
  return (
    <Button className = {cn(styles.cross, className)} appearance='none' onClick={onClick}>+</Button>
  )
}

export default Cross