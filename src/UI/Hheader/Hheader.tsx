import React from 'react'
import style from './Hheader.module.scss'


interface HheaderProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "children">{
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}


function Hheader({type, className, children, ...props} : HheaderProps) {
    switch(type){
        case "h1": 
            return <h1 className={style.h1}>{children}</h1>
        case "h2": 
            return <h2 className={style.h2}>{children}</h2>
        case "h3": 
            return <h3 className={style.h3}>{children}</h3>
        case "h4": 
            return <h4 className={style.h4}>{children}</h4>
        case "h5": 
            return <h5 className={style.h5}>{children}</h5>
        case "h6": 
            return <h6 className={style.h6}>{children}</h6>
        default: 
            return <></>
    }
}

export default Hheader