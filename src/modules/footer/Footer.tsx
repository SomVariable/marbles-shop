import styles from './Footer.module.scss';
import Icon from '../../UI/Icon/Icon';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contactsBlock}>
            <h2 className={styles.contacts}>Контакты</h2>
            <a className={styles.tel} href="tel:65465675678">+6 546 567 56 78</a>
             <div className={styles.socialBlock}>
               <div className={styles.insta}>
                <Icon type='instagram'/>
                <span>instagram</span>
               </div>
               <div className={styles.whatsUp}>
                <Icon type='cart'/>
                <span>WhatsApp</span>
               </div>
             </div>
          </div>

          <div className={styles.addresBlock}>
            <h2 className={styles.addres}>Адрес</h2>
            <address className={styles.addresStreet}>
              Заветный <br /> пр. Лазурный, д.11
            </address>
            <div className={styles.work}>
               Режим работы
            </div>
            <div className={styles.allTime}>
               Круглосуточно
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;