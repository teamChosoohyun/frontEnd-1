import styles from "../../styles/contents/lego.module.css";
import Lego_pic from "./img/lego_pic.png";
import Image from "next/image";
import Fade from 'react-reveal/Fade'
export default function Lego() {
    return (
        <div>
            <Fade bottom>
            <div className={styles.title}>
                <p>레고 교육</p>
            </div>
            <div className={styles.lego_img}><Image src={Lego_pic}/></div>
            <div className={`${styles.title} ${styles.top2}`}>
                <p>레고 교육이란?</p>
            </div>
            <div className={styles.explain}>
                <p>레고 교육이란 레고 교육 (추후 수정 예정)</p>
            </div>
            </Fade>
        </div>
    )
}
