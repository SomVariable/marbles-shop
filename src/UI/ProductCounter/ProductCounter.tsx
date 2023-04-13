import React from 'react'
import styles from './ProductCounter.module.scss'
import CustomText from '../CustomText/CustomText'
import cn from 'classnames'


interface IProductCountProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
    count: number,
    incCount: () => void,
    decCount: () => void,
}

function ProductCounter({count, incCount, decCount, className}: IProductCountProps) {

  return (
    <div className = {cn(styles.productCounter, className)}>
        <div className = {cn("no-select", styles.button)} onClick={decCount}>-</div>
        <CustomText className= {styles.text} type="medium">{count}</CustomText>
        <div className = {cn("no-select", styles.button)} onClick={incCount}>+</div>
    </div>
  )
}

export default ProductCounter