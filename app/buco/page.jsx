"use client";
import styles from "./buco.module.css";


export default function Buco() {
  const Buco = [
    {
      img: "https://i.imgur.com/pDru3IQ.jpeg",
      title: "Buço avulso",
      description: "Buço Avulso: deixe seu rosto ainda mais bonito e sem pelos indesejados.",
      price: "R$ 20,00",
    },

  ];

  const handleButtonClick = () => {
    window.location.href = "/procedimentos"; // Substitua com a URL real da página de procedimentos
  };


  return (
    <div className={styles.fundo}>
      <div className={styles.cardContainer}>
        {Buco.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
            <p className={styles.cardPrice}>{item.price}</p>
          </div>
        ))}
        <div className={styles.buttomContainer}>
          <button className={styles.buttom} onClick={handleButtonClick}>
            Voltar para procedimentos
          </button>
        </div>
      </div>
    </div>
  );

}