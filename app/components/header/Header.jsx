"use client";
import React from "react";
import styles from "../header/header.module.css";
import NavLink from "../NavLink/NavLink";
import { useCollapse } from "react-collapsed";
import { AiOutlineMenu } from "react-icons/ai";
import { ImHome3 } from "react-icons/im";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdFace } from "react-icons/md";
import { MdEvent } from "react-icons/md";

const Header = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <>
            <div className={styles.header}>
                <div className={styles.collapsible} {...getToggleProps()}>
                    <AiOutlineMenu />
                </div>
                <div className={styles.imagem}>
                    <img
                        src="https://i.imgur.com/iaLdgPn.png"
                        alt="logo"
                        height={50}
                        width={190}
                    />
                </div>
                <div {...getCollapseProps()} className={styles.menuContent}>
                    <div className={styles.gradientBackground} />
                    <div className={styles.content}>
                        <div className={styles.DHome}>
                            <li>
                                <NavLink texto={<ImHome3 size={24} />} rota="/" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Home"} rota={"/"} />
                            </p>
                        </div>
                        <div className={styles.DAbout}>
                            <li>
                                <NavLink texto={< RiAccountCircleFill size={24} />} rota="/sobremim" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Sobremim"} rota={"/sobremim"} />
                            </p>
                        </div>
                        <div className={styles.DCharacter}>
                            <li>
                                <NavLink texto={< MdFace size={24} />} rota="/procedimentos" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Procedimentos"} rota={"/procedimentos"} />
                            </p>
                        </div>
                        <div className={styles.DCreate}>
                            <li>
                                <NavLink texto={< MdEvent size={24} />} rota="/agenda" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Agenda"} rota={"/agenda"} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
