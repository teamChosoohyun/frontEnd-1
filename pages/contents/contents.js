import styles from "../../styles/contents/contents.module.css";
import {Header} from "../allFiles";

export default function contents() {
    return (
        <div className={styles.contents}>
            <Header />
            <div className={styles.title}>
                <h2 style={{fontSize : 60, marginTop : 60}}>콘텐츠 소개</h2>
                <text style={{fontSize : 30, color:"#3F80FF", fontWeight : 1, marginTop  : 10}}>"더 나은 미래를, 보다 많은 학생에게"</text>
                <br/>
                <text style={{fontSize : 30, fontWeight : 1}}>모든 아이들이 누릴 수 있는 소프트웨어 교육</text>
            </div>
        </div>
    )
}
