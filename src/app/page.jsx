"use client"
// import styles from './page.module.css'
import "./globals.css";
import 'animate.css';
import Main from './components/Main';
import Hero from './components/Hero';
import SubHero from './components/subHero';
import styles from "./styles/main.module.css"

// Gold: #FFD700
// Light Gray (#F0F0F0)
export default function Home() {

  return (
    <>

      <Main p1="Unlock the Magic of Cinema" p2=" Your Gateway to Movie Marvels!"  p1Styles={styles.p1Home}></Main>
      <Hero></Hero>
      <SubHero></SubHero>

    </>
  )
}
