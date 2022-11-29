import styles from "../../styles/contents/all.module.css";
import Image from "next/image";
import Lego_pic from "./img/lego_pic.png";
import Maker_pic from "./img/maker.png";
import Software_pic from "./img/software.png";
import Contents from "./contents";
import Link from "next/link";
import Footer from "../footer/footer";

export default function all() {
    return (
        <div className={styles.all}>
            <Contents />
            <div className={styles.main}>
                <div/>
                <div className={styles.menu}>
                    <div className={styles.check}>
                        <text>전체</text>
                    </div>
                    <Link href="/contents/lego"><text className={styles.allText}>레고교육</text></Link>
                    <Link href="/contents/software"><text className={styles.allText}>소프트웨어교육</text></Link>
                    <Link href="/contents/others"><text className={styles.allText}>기타교육들</text></Link>
                </div>
                <div>
                    <h2 className={styles.what}>레고교육</h2>
                    <div className={styles.about}>
                        <Image src={Lego_pic} className={styles.image}/>
                        <br/>
                        <text>레고수업에 대한 내용(추후 수정)</text>
                    </div>
                </div>
                <br/>
                <div>
                    <h2 className={styles.what}>소프트웨어교육</h2>
                    <div className={styles.about}>
                        <Image src={Software_pic} className={styles.image}/>
                        <br />
                        <text>소프트웨어 교육에 대한 내용(추후 수정)</text>
                    </div>
                </div>
                <br/>
                <div>
                    <h2 className={styles.what}>메이커교육</h2>
                    <div className={styles.about}>
                        <Image src={Maker_pic} className={styles.image}/>
                        <br />
                        <text>메이커 교육에 대한 내용(추후 수정)</text>
                    </div>
                </div>
                <div className={styles.center}>
                    <Footer/>
                </div>
            </div>
        </div>

    )
}
