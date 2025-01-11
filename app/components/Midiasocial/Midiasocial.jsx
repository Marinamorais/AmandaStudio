import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'; // Ícones das redes sociais
import styles from './midiasocial.module.css'; // Estilos com módulo CSS

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <h2 className={styles.socialMediaTitle}>Siga-nos nas redes sociais</h2>
      <div className={styles.socialMediaIcons}>
        <a href="https://www.facebook.com/amanda.scaranello.3" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FaFacebook size={40} color="#3b5998" />
        </a>
        <a href="https://www.instagram.com/scaranelloamanda" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FaInstagram size={40} color="#e4405f" />
        </a>
        {/* Ícone do Google Maps */}
        <a className={styles.maps} target="_blank" href="https://goo.gl/maps/AdcGveX9KKJ64srN6">
          <FaMapMarkerAlt size={40} color="#ff0000" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;

