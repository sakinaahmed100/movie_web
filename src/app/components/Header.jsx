import { RiMovie2Fill } from "react-icons/ri"
import styles from "../styles/header.module.css"
import "../globals.css";
import Nav from "./Nav";

export default function Header() {

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.name} center`}>
                    <RiMovie2Fill className={styles.icon}></RiMovie2Fill>
                    <span className={`${styles.name}`}>FilmFlick</span>
                </div>
                <Nav></Nav>
            </header>
        </>
    )
}