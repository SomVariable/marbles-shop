import React from 'react'
import cn from 'classnames'
import style from './Hheader.module.scss'


interface HheaderProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "children">{
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}


function Hheader({type, className, children, ...props} : HheaderProps) {
    switch(type){
        case "h1": 
            return <h1 className={cn(style.h1, className)}>{children}</h1>
        case "h2": 
            return <h2 className={cn(style.h2, className)}>{children}</h2>
        case "h3": 
            return <h3 className={cn(style.h3, className)}>{children}</h3>
        case "h4": 
            return <h4 className={cn(style.h4, className)}>{children}</h4>
        case "h5": 
            return <h5 className={cn(style.h5, className)}>{children}</h5>
        case "h6": 
            return <h6 className={cn(style.h6, className)}>{children}</h6>
        default: 
            return <></>
    }
}

export default Hheader