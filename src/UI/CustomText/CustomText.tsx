import React from 'react'
import styles from './CustomText.module.scss'
import cn from 'classnames'

interface ITextProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "className" | "children">{
    type:  "small" | "medium" | "big" | "discount"
}

function CustomText({type, children, className} : ITextProps) {
  return (
    <p className = {cn(styles.text, className, {
        [styles.smallText]: type === "small",
        [styles.mediumText]: type === "medium",
        [styles.bigText]: type === "big",
        [styles.bigText]: type === "discount",
    })}>
        {children}
    </p>
  )
}

export default CustomText

// --fs-xxs: 12px;
// 	--fs-xs: 14px;
// 	--fs-s: 16px;
// 	--fs-m: 18px;
// 	--fs-l: 20px;
// 	--fs-xxl: 22px;
// 	--fs-xxxl: 36px;