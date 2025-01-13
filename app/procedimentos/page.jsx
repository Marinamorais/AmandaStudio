"use client";
import styles from "./procedimentos.module.css";
import Header from "../components/header/Header";
import Link from "next/link";

export default function Procedimentos() {
    const procedimentos = [
        {
            title: "Cílios",
            imgSrc: "https://i.imgur.com/5cn81nA.png",
            link: "/cilios", // Certifique-se de usar caminhos relativos à raiz
        },
        {
            title: "Sobrancelhas",
            imgSrc: "https://i.imgur.com/tUvL6yi.png",
            link: "/sobrancelha",
        },
        {
            title: "Limpeza de Pele",
            imgSrc: "https://i.imgur.com/IhvRdSE.png",
            link: "/limpeza",
        },
        {
            title: "Buço",
            imgSrc: "https://i.imgur.com/oNcQTPj.png", // Substituir pela imagem desejada
            link: "/buco",
        },
    ];

    return (
        <div>
            <Header />
            <div className={styles.fundo}>
                <div className={styles.cardContainer}>
                    {procedimentos.map((proc, idx) => (
                        <Link href={proc.link} key={idx}>
                            <div className={styles.card}>
                                <img
                                    src={proc.imgSrc}
                                    alt={proc.title}
                                    className={styles.cardImage}
                                />
                                <h3 className={styles.cardTitle}>{proc.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
