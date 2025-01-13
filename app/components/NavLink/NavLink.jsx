import styles from "./NavLink.module.css"
import Link from "next/link"

const NavLink = ({rota, texto}) => {
    return (
            <Link href={rota} className={styles.navLink}>{texto}</Link>
    )
}

export default NavLink