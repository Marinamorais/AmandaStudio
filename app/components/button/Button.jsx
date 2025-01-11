import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp
import styles from './button.module.css'; // Importa o CSS module
function Contato() {
  return (
    <div className={styles.contato}>
      <button 
        className={styles.botaoZap}
        onClick={() => window.open('https://wa.me/55199991364604', '_blank')}
      >
        <FaWhatsapp style={{ marginRight: '10px' }} /> Falar no WhatsApp
      </button>
    </div>
  );
}

export default Contato;
