import React from 'react'
import styles from './ProductCounter.module.scss'
import CustomText from '../CustomText/CustomText'
import cn from 'classnames'


interface IProductCountProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
    count: number,
    setCount: (newNumber: number) => void
}

function ProductCounter({count, setCount, className}: IProductCountProps) {

  const addProduct = () => {
    const newCount = count + 1;
    setCount(newCount)
  }

  const removeProduct = () => {
    const newCount = count - 1;

    setCount(newCount >= 0? newCount : 0)
  }

  return (
    <div className = {cn(styles.productCounter, className)}>
        <div className = {cn("no-select", styles.button)} onClick={removeProduct}>-</div>
        <CustomText className= {styles.text} type="medium">{count}</CustomText>
        <div className = {cn("no-select", styles.button)} onClick={addProduct}>+</div>
    </div>
  )
}

export default ProductCounter