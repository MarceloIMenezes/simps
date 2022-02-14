import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export function Header() {

    return (
        <header className={styles.headerStyle}>
            <Link to="/">
                <button className={styles.headerNames + ' ' + styles.headerB}>HOME</button>
            </Link>
            <Link to="servicos">
                <button className={styles.headerNames + ' ' + styles.headerB}>Serviços</button>
            </Link>
            <Link to="ordens">
                <button className={styles.headerNames + ' ' + styles.headerB}>Ordens</button>
            </Link>
        </header>
    )
}