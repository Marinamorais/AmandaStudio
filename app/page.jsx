"use client"; // This line is important
import React from 'react'; // Import React
import styles from './page.module.css'; // Import CSS module
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';
import Button from './components/button/Button';
import Midiasocial from './components/Midiasocial/Midiasocial';
import Map from './components/Map/Map';
import Footer from './components/footer/Footer';


const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Carousel />
      </div>

      <h2 className={styles.bemvindo}>
        VOCÊ SONHA, EM TRANSFORMAR OLHARES, REALÇAR A BELEZA NATURAL E DESTACAR A EXPRESSÃO DOS
        OLHOS?
      </h2>
      <h3 className={styles.bemvindo}>
        Se sim, nosso Curso de Lash Designer é a chave para desbloquear seu potencial e ingressar no
        mundo fascinante da beleza.
      </h3>
      <h2 className={styles.bemvindo}>CONHEÇA NOSSOS CURSOS</h2>

      <div>
        <Card />
      </div>

      <div>
        <Button />
      </div>

      <div className={styles.conheca}>
        <h2 className={styles.conheca}>Conheça nosso Espaço</h2>
        <div className={styles.conhecaImg}>
          <img src="https://i.imgur.com/JgKt0cn.png" alt="Logo AmandaStudio" />
          <img src="https://i.imgur.com/FtLUvtK.png" alt="Logo AmandaStudio" />
          <img src="https://i.imgur.com/nS7R3jO.png" alt="Logo AmandaStudio" />
        </div>
      </div>


      <div>
        <Midiasocial />
      </div>

      <div>
        <Map />
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
