import styles from "../../styles/contents/all.module.css";
import Image from "next/image";
import Lego_pic from "./img/lego_pic.png";
import Maker_pic from "./img/maker.png";
import Software_pic from "./img/software.png";

export default function All() {
    return (
        <div className={styles.root}>
            <div className={styles.class}>
                <h2>레고 교육</h2>
                <div className={styles.explain}>
                    <Image src={Lego_pic}/>
                    <p>레고수업에 대한 내용(추후 수정)</p>
                </div>
            </div>
            <div className={styles.class}>
                <h2>소프트웨어 교육</h2>
                <div className={styles.explain}>
                    <Image src={Software_pic}/>
                    <p>소프트웨어 교육에 대한 내용(추후 수정)</p>
                </div>
            </div>
            <div className={styles.class}>
                <h2>메이커 교육</h2>
                <div className={styles.explain}>
                    <Image src={Maker_pic}/>
                    <p>메이커 교육에 대한 내용(추후 수정)</p>
                </div>
            </div>
        </div>
    )
}
