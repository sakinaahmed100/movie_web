"use client"
import Main from "../components/Main";
import styles from "../styles/main.module.css"

export default function About() {
const text="Embark on a cinematic journey where imagination meets reality, stories unfold in frames, and emotions are captured in every scene. Our movie haven is not just a website; it's a portal to explore worlds, cultures, and dreams. Join us as we celebrate the art of storytelling through the silver screen, where heroes rise, villains fall, and the human experience comes alive in vibrant technicolor."
    return (
        <>
       <Main p1="About Us" p2={text} p1Styles={styles.p1About} p2Styles={styles.p2About}></Main>
        </>)
    }
