import styles from "../../styles/contents/others.module.css";
import Lego_pic from "./img/lego_pic.png";
import Image from "next/image";
import Fade from 'react-reveal/Fade'
export default function Others() {
    return (
        <div>
            <Fade bottom>
            <div className={styles.title}>
                <p>??? 교육</p>
                <Image src={Lego_pic}/>
            </div>
            <div className={styles.title}>
                <p>??? 교육</p>
                <Image src={Lego_pic}/>
            </div>
            </Fade>
        </div>
    )
}
