import styles from "../styles/main.module.css"
import Link from 'next/link'
import { BiMoviePlay } from "react-icons/bi"
import 'animate.css';

export default function Main({p1,p2,p1Styles,p2Styles}) {
 
    return (
      <>

<section className={`${styles.main} center`}>
        <div className={`center ${styles.box}`}>
          <p className={p1Styles}>
            {p1}
          </p>
          <p className={`${p2Styles} animate__animated animate__backInLeft`}>
           {p2}
          </p>
          <Link className={`link`} href="/movies">
            <button className={`${styles.btn} center`}><BiMoviePlay className={styles.icon}></BiMoviePlay>Explore Movies</button>
          </Link>
        </div>
      </section>
      </>)
}