import styles from './footer.module.css'
import NavLink from "../NavLink/NavLink"
import { SiInstagram } from "react-icons/si"
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

const Footer = () => {
  return (
    <>
      <footer className={styles.site}>
        <div className={styles.row}>
          <div className={styles.home}>
            <div className={styles.col}>
              <h6>Sobre</h6>
              <p className="text-justify">Venha nos visitar e experimente nossos tratamentos personalizados. Agende seu horário e desfrute de uma experiência única de cuidados estéticos. Studio Amanda Scaranello, onde sua beleza ganha destaque!</p>
            </div>
            <br />
            <div className={styles.col}>
              <h6>Categorias</h6>
              <ul className={styles.footer}>
                <li><NavLink texto="Home" rota="/" /></li>
                <li><NavLink texto="SobreMim" rota="/sobre" /></li>
                <li><NavLink texto="Procedimentos" rota="/procedimentos" /></li>
                <li><NavLink texto="Agenda" rota="/agenda" /></li>
              </ul>
            </div>
          </div>
          <br />
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.copyright}>Copyright &copy; 2023 All Rights Reserved by
                <a href="./sobre">Amanda Scaranello</a>.
              </p>
            </div>

            <div className={styles.col}>
              <ul className={styles.social}>
                <li><a className={styles.facebook} target="_blank" href="https://www.facebook.com/amanda.scaranello.3"><FaFacebookF /></a></li>
                <li><a className={styles.instagram} target="_blank" href="https://www.instagram.com/scaranelloamanda"><SiInstagram /></a></li>
                <li><a className={styles.maps} target="_blank" href="https://goo.gl/maps/AdcGveX9KKJ64srN6"><FaMapMarkerAlt /></a></li>
                <li><a className={styles.whatsapp} target="_blank" href="https://wa.me/c/5519993324124"><IoLogoWhatsapp /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;