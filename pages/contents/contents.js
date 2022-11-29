import styles from "../../styles/contents/contents.module.css";
import Header from '../header/header'

export default function contents() {
    return (
        <div className={styles.contents}>
            <Header />
            <div className={styles.title}>
                <h2 className={styles.intro}>콘텐츠 소개</h2>
                <text className={styles.content}>"더 나은 미래를, 보다 많은 학생에게"</text>
                <br/>
                <text className={styles.content2}>모든 아이들이 누릴 수 있는 소프트웨어 교육</text>
            </div>
        </div>
    )
}
