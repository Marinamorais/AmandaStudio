"use client";
import styles from "./agenda.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Midiasocial from '../../components/Midiasocial/Midiasocial';

export default function Agenda() {
  return (
    <div className={styles.sobre}> {/* Aqui você pode adicionar uma classe ao container principal */}
      <Header /> {/* Componente Header */}
      <h1 className={styles.title}>Horário de Funcionamento</h1>
      <div className={styles.horarios}>
        <p>Segunda-feira: 09:00 às 17:00</p>
        <p>Terça-feira: 09:00 às 18:00</p>
        <p>Quarta-feira: 08:00 às 11:00</p>
        <p>Quinta-feira: 09:00 às 18:00</p>
        <p>Sexta-feira: 09:00 às 18:00</p>
        <p>Sábado: 09:00 às 13:00</p>
      </div>
      <div>
        <Midiasocial /> {/* Componente Midiasocial */}
      </div>
      <div>
        <Footer /> {/* Componente Footer */}
      </div>
    </div>
  );
}
