import styles from "../../styles/contents/software.module.css";
import Soft_pic from "./img/software.png";
import Image from "next/image";

export default function Software() {
    return (
        <div>
            <div className={styles.title}>
                <p>소프트웨어 교육</p>
            </div>
            <div className={styles.lego_img}><Image src={Soft_pic}/></div>
            <div className={`${styles.title} ${styles.top2}`}>
                <p>소프트웨어 교육이란?</p>
            </div>
            <div className={styles.explain}>
                <p>소프트웨어 교육이란 소프트웨어 교육 (추후 수정 예정)</p>
            </div>
        </div>
    )
}
