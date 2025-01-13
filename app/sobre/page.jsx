import styles from "./sobre.module.css";
import Header from "../components/header/Header";

export default function Sobre() {
    return (

        <>
            <Header />

            <div className={styles.containerprincipal}>
                <img className={styles.Quemsou} src="https://i.imgur.com/iaLdgPn.png" alt="logo" />
            </div>

            <div className={styles.containersegundario}>
                <h1 className={styles.amanda}>Amanda Menezes Scaranello</h1>
            </div>

            <div className={styles.containerterciario}>
                <p className={styles.texto}>Amanda Menezes Scaranello, de 41 anos, é mãe de três filhos. Inicialmente, abriu mão da carreira em Ciências Contábeis para se dedicar à maternidade e, por cerca de 6 anos, ficou em casa vendendo roupas. Quando os filhos cresceram, decidiu retomar sua carreira, abriu uma loja de roupas femininas,
                    mas logo sentiu que faltava algo.
                    Apaixonada por estética, fez cursos de Design de Sobrancelhas, e desde então se especializou em diversas técnicas, como extensão de cílios, lash lifting e maquiagem. Atualmente, oferece atendimentos e cursos individuais em seu Studio em Valinhos.
                </p>

                <hr className={styles.divisoria} />
                <div className={styles.profissao}>
                    <div className={styles.cardprofissao}>
                        <h1>Bacharel em Ciências Contábeis</h1>
                    </div>
                    <div className={styles.cardprofissao}>
                        <h1>Empresária e Esteticista</h1>
                    </div>
                </div>
            </div>
        </>
    );
}