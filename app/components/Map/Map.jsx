import React from 'react';
import styles from './map.module.css';

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.283092304036!2d-46.98857002531899!3d-22.976615240369142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd83e62e9ca7%3A0x25a73408b78f60fb!2sRua%20Arthur%20Zanetti%2C%2011%20-%20Jardim%20Bom%20Retiro%2C%20Valinhos%20-%20SP%2C%2013275-213!5e0!3m2!1spt-BR!2sbr!4v1709740246181!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map;

