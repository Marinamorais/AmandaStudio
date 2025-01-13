"use client";
import styles from "./cilios.module.css";


export default function Cilios() {
  const cilios = [
    {
      img: "https://i.imgur.com/uDmxMQS.png",
      title: "Volume Híbrido",
      description: "Combina fios individuais com fãs volumosos, criando um olhar dramático e elegante.",
      price: "R$ 190,00",
    },
    {
      img: "https://i.imgur.com/wFwEXJv.png",
      title: "Lash Lifting",
      description: "Curvatura dos cílios naturais, proporcionando um olhar mais aberto e expressivo.",
      price: "R$ 130,00",
    },
    {
      img: "https://i.imgur.com/n71NKfZ.png",
      title: "Volume Egípcio",
      description: "Múltiplas extensões ultrafinas criam um efeito de volume intenso e glamoroso.",
      price: "R$ 150,00",
    },
    {
      img: "https://i.imgur.com/lfwZXQG.pnghttps://i.imgur.com/lfwZXQG.png",
      title: "Fio a Fio",
      description: "Extensões coladas individualmente, proporcionando um olhar natural e volumoso.",
      price: "R$ 130,00",
    },
    {
      img: "https://i.imgur.com/dANQRzt.png",
      title: "Volume Brasileiro",
      description: "Combina o efeito volume com o fio a fio, usando extensões em forma de Y.",
      price: "R$ 140,00",
    },
    {
      img: "https://i.imgur.com/G009fZp.png",
      title: "Volume Inglês (5D)",
      description: "Cinco fios ultrafinos em um cílio natural para um efeito volumoso e intenso.",
      price: "R$ 170,00",
    },
    {
      img: "https://i.imgur.com/q8Qkez6.png",
      title: "Volume Artístico",
      description: "Extensões ultrafinas criam um visual intenso e glamoroso.",
      price: "R$ 185,00",
    },
    {
      img: "https://i.imgur.com/HfQFVyt.png",
      title: "Volume Luxo (6D)",
      description: "Seis extensões ultrafinas para um olhar volumoso e cheio de dimensão.",
      price: "R$ 185,00",
    },
  ];
  
  const handleButtonClick = () => {
    window.location.href = "/procedimentos"; // Substitua com a URL real da página de procedimentos
  };
  

  return (
    <div className={styles.fundo}>
      <div className={styles.cardContainer}>
        {cilios.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
            <p className={styles.cardPrice}>{item.price}</p>
          </div>
        ))}
      </div>
      <div className={styles.observacao}>
        <p>*A manutenção com pelo menos 50% dos fios e em até 21 dias da data da extensão, será cobrado 60% do valor da extensão.*</p>
      </div>
      <div className={styles.buttomContainer}>
        <button className={styles.buttom} onClick={handleButtonClick}>
          Voltar para procedimentos
        </button>
      </div>
    </div>
  );
}