import React from 'react'
import { Link, LinkProps } from 'react-router-dom'


interface ICustomLinkProps extends React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>{
    src: string,
    children: React.ReactNode
}

function CustomLink({src, children} : ICustomLinkProps) {
  return (
    <Link to = {src}>{children}</Link>
  )
}

export default CustomLink