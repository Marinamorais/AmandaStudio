"use client";
import styles from "./limpeza.module.css";


export default function Limpeza() {
  const Limpeza = [
    {
      img: "https://i.imgur.com/9hWWaJd.png",
      title: "Limpeza com Extração",
      description: "A limpeza de pele é um procedimento facial que visa remover impurezas, oleosidade e células mortas, promovendo uma pele mais saudável e revitalizada.",
     
    },
    {
      img: "https://i.imgur.com/MEWzuDd.png",
      title: "Limpeza hidratante",
      description: "A limpeza de pele com extração é um procedimento que, além de limpar a pele, realiza a remoção de cravos e espinhas, garantindo uma pele mais lisa e saudável.",
     
    },

  ];

  const handleButtonClick = () => {
    window.location.href = "/procedimentos"; // Substitua com a URL real da página de procedimentos
  };

  return (
    <div className={styles.fundo}>
      <div className={styles.cardContainer}>
        {Limpeza.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}

      </div>
      <div className={styles.buttomContainer}>
        <button className={styles.buttom} onClick={handleButtonClick}>
          Voltar para procedimentos
        </button>
      </div>
    </div>
  );

}
