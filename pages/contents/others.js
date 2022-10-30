import styles from "../../styles/contents/others.module.css";
import Contents from "./contents";
import Link from "next/link";
import Lego_pic from "./img/lego_pic.png";
import Image from "next/image";

export default function others() {
    return (
        <div className={styles.lego}>
            <Contents />
            <div className={styles.menu}>
                <Link href="/contents/all"><text>전체</text></Link>
                <Link href="/contents/lego"><text style={{marginLeft:83}}>레고교육</text></Link>
                <Link href="/contents/software"><text style={{marginLeft:83}}>소프트웨어교육</text></Link>
                <div className={styles.check} style={{marginLeft:83}}>
                    <Link href="/contents/others"><text>기타교육들</text></Link>
                </div>
            </div>
            <div className={styles.title} style={{marginTop:115}}>
                <text>메이커 교육</text>
            </div>
            <div className={styles.lego_img}><Image src={Lego_pic}/></div>
            <div className={styles.title} style={{marginTop:115}}>
                <text>??? 교육</text>
            </div>
            <div className={styles.lego_img}><Image src={Lego_pic}/></div>
            <div className={styles.title} style={{marginTop:115}}>
                <text>??? 교육</text>
            </div>
            <div className={styles.lego_img}><Image src={Lego_pic}/></div>
        </div>
    )
}
