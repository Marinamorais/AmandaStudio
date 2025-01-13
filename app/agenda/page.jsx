import styles from "./agenda.module.css";
import Header from "../components/header/Header";

export default function Agenda() {
  return (
    <div className={styles.sobre}>
      <Header />
      <h1>Sobre</h1>
      <p>Este é o conteúdo da página Agenda.</p>
    </div>
  );
}