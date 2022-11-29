import MainHeader from './header/mainHeader'
import Content from './main/content'
import Intro from './main/intro'
import Lecturer from './main/lecturer'
import Footer from "./footer/footer"

import styles from '../styles/index.module.css';
import Image from "next/image";

export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.mainIntro}>
            <Image src={"/images/main.png"} alt={"icon"} layout={"fill"} />
            <MainHeader/>
            <p className={styles.mainC}>Coding</p>
            <p className={styles.mainM}>Mom</p>
            <p className={styles.mainS}>코딩맘 SW 아카데미</p>
        </div>
        <Content />
        <Intro/>
        <Lecturer/>
        <Footer/>
    </div>
  )
}
