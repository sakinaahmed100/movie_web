import Image from 'next/image'
import "../globals.css";
import styles from "../styles/subHero.module.css"

export default function SubHero() {

    return (
        <>
            <section className={`${styles.subHero} center`}>
                <div>
                    <Image className={styles.image} src="https://plus.unsplash.com/premium_photo-1661551917096-d17af8ce1ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" height={300} width={400}></Image>
                </div>
                <div className={styles.subHeroText}>

                    <div className={styles.heading}>
                        Unlock Entertainment Freedom: <span className={styles.download}> Download Now,</span> Watch Anytime, Anywhere!
                    </div>
                </div>
            </section>
        </>)
}