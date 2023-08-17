import styles from "../styles/Nav.module.css"
import Link from "next/link"
import "../globals.css";


export default function Nav() {
    return (
        <>
            <div className={`center ${styles.nav}`}>

                <li className={styles.list}>
                    <Link className={`link ${styles.link}`} href="/">
                        Home
                    </Link>
                </li>

                <li className={`center ${styles.nav}`}>
                    <Link className={`link ${styles.link}`} href="/about">
                        About
                    </Link>
                </li>


                <li className={`center ${styles.nav}`}>
                    <Link className={`link ${styles.link}`} href="/movies">
                        Movies
                    </Link>
                </li>


                <li className={`center ${styles.nav}`}>
                    <Link className={`link ${styles.link}`} href="/contact">
                        Contact
                    </Link>
                </li>


                </div>
            </>
            )
}