import styles from "../../styles/contents/software.module.css";
import Contents from "./contents";
import Link from "next/link";
import Lego_pic from "./img/lego_pic.png";
import Image from "next/image";
import Footer from "../footer/footer";

export default function software() {
    return (
        <div className={styles.software}>
            <Contents />
            <div className={styles.main}>
                <div style={{height:51}} />
                <div className={styles.menu}>
                    <Link href="/contents/all"><text>전체</text></Link>
                    <Link href="/contents/lego"><text style={{marginLeft:83}}>레고교육</text></Link>
                    <div className={styles.check} style={{marginLeft:83}}>
                        <Link href="/contents/software"><text>소프트웨어교육</text></Link>
                    </div>
                    <Link href="/contents/others"><text style={{marginLeft:83}}>기타교육들</text></Link>
                </div>
                <div className={styles.title} style={{marginTop:115}}>
                    <text>소프트웨어 교육</text>
                </div>
                <div className={styles.lego_img}><Image src={Lego_pic}/></div>
                <div className={styles.title} style={{marginTop:69}}>
                    <text>소프트웨어 교육이란?</text>
                </div>
                <div className={styles.explain}><text>소프트웨어 교육이란 소프트웨어 교육 (추후 수정 예정)</text></div>
                <div style={{textAlign:"center"}}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
