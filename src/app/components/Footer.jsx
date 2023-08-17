// "use server"
import styles from "../styles/footer.module.css"
import "../globals.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"

export default function Footer() {
    const date= new Date().getFullYear()

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <li>Question & Answers</li>
                        <li>Media Center</li>
                        <li>Availability</li>
                        <li>Membership Policy</li>
                        <li>Help Center</li>
                    </div>

                    <div className={styles.col}>
                        <label htmlFor="">SignUp For Our Newsletter</label>
                        <input className={styles.input} type="text" placeholder="Enter your email address" />

                    </div>

                    <div className={styles.col}>
                        <li>Question & Answers</li>
                        <li>Media Center</li>
                        <li>Availability</li>
                        <li>Membership Policy</li>
                        <li>Help Center</li>
                    </div>

                    <div className={styles.col}>
                        <p>Find us at:</p>
                        <div className={`${styles.iconList}`}>
                            <li><BsFacebook></BsFacebook></li>
                            <li><BsInstagram></BsInstagram></li>
                            <li><AiFillTwitterCircle></AiFillTwitterCircle></li>
                            <li><BsWhatsapp></BsWhatsapp></li>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
               <p>&copy;{date} FilmFlick</p> 
                </div>
            </footer>

        </>
    )
}