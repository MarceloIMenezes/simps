import styles from "./styles.module.css"
import { Link } from "react-router-dom"


export function Body() {

    return (
        <body>
            <Link to="info-cliente" className={styles.bodyStyle}>
                <button className={styles.bodyNames + ' ' + styles.bodyB}>CADASTRAR CLIENTE</button>
            </Link>
            <Link to="ordens" className={styles.bodyStyle}>
                <button className={styles.bodyNames + ' ' + styles.bodyB}>ORDEM DE SERVIÇOS</button>
            </Link>
            <Link to="servicos" className={styles.bodyStyle}>
                <button className={styles.bodyNames + ' ' + styles.bodyB}>TABELA DE SERVIÇOS</button>
            </Link>
        </body>
    )
}