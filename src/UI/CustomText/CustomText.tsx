import React from 'react'
import cn from 'classnames'
import styles from './CustomText.module.scss'

interface ITextProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "className" | "children">{
    type:  "small" | "smallBold" | "medium" | "big" | "discount" | "link" | "linkBig" | "theSmallest"
}

function CustomText({type, children, className} : ITextProps) {
  return (
    <p className = {cn(styles.customText, className, {
        [styles.customTextSmall]: type === "small",
        [styles.customTextMedium]: type === "medium",
        [styles.customTextBig]: type === "big",
        [styles.customTextDiscount]: type === "discount",
        [styles.customTextLink]: type === "link",
        [styles.customTextLinkBig]: type === "linkBig",
        [styles.customTextSmallBold]: type === "smallBold",
        [styles.customTextTheSmallest]: type === "theSmallest",
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