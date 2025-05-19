"use client";
import styles from "./sobrancelha.module.css";


export default function Sombrancelha() {
  const Sombrancelha = [
    {
      img: "https://i.imgur.com/Q9O7rN2.png",
      title: "Sem Henna",
      description: "Design + Coloração é uma combinação de técnicas de design de sobrancelha e coloração para criar composições visuais impactantes e esteticamente agradáveis.",
  
    },
    {
      img: "https://i.imgur.com/dRZPTuz.png",
      title: "Com rena",
      description: "O lash lifting é um procedimento que curva os cílios naturais com produtos químicos, proporcionando um olhar mais aberto e expressivo sem a necessidade de extensões.",
  
    },
    {
      img: "https://i.imgur.com/BQ57CxK.png",
      title: "Desing + buço",
      description: "Designer de sobrancelha, coloração e buço em apenas um pacote. Ideal para quem deseja realçar o olhar e a expressão facial com um visual harmonioso e equilibrado.",
 
    },

  ];
  const handleButtonClick = () => {
    window.location.href = "/procedimentos"; // Substitua com a URL real da página de procedimentos
  };

  return (
    <div className={styles.fundo}>
      <div className={styles.cardContainer}>
        {Sombrancelha.map((item, idx) => (
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