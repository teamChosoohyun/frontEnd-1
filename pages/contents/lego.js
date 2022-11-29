import styles from "../../styles/contents/lego.module.css";
import Contents from "./contents";
import Link from "next/link";
import Lego_pic from "./img/lego_pic.png";
import Image from "next/image";
import Footer from "../footer/footer";

export default function lego() {
    return (
        <div className={styles.lego}>
            <Contents />
            <div className={styles.main}>
                <div className={styles.afterMain} />
                <div className={styles.menu}>
                    <Link href="/contents/all"><text>전체</text></Link>
                    <div className={`${styles.check} ${styles.left}`}>
                        <Link href="/contents/lego"><text>레고교육</text></Link>
                    </div>
                    <Link href="/contents/software"><text className={styles.left}>소프트웨어교육</text></Link>
                    <Link href="/contents/others"><text className={styles.left}>기타교육들</text></Link>
                </div>
                <div className={`${styles.title} ${styles.top1}`}>
                    <text>레고 교육</text>
                </div>
                <div className={styles.lego_img}><Image src={Lego_pic}/></div>
                <div className={`${styles.title} ${styles.top2}`}>
                    <text>레고 교육이란?</text>
                </div>
                <div className={styles.explain}><text>레고 교육이란 레고 교육 (추후 수정 예정)</text></div>
                <div className={styles.center}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
