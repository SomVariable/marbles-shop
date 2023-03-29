import styles from './Title.module.scss';
import cn from 'classnames';

interface TitleProp extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "className">{
  children: string;
  
}
const Title = ({className, children, ...props}: TitleProp) => {
  return (
    <h2 className={cn(styles.title, className)} {...props}>
      {children}
    </h2>
  )
}
export default Title;