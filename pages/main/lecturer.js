import styles from '../../styles/main/lecturer.module.css';

export default function Lecturer(){
    return(
        <div className={styles.lecturer}>
            <div className={`${styles.lec} ${styles.one}`}>
                <img src={"/images/lecturer.png"} alt={"icon"} className={styles.lecImg} />
                <p className={styles.lecField}>소프트웨어</p>
            </div>
            <div className={`${styles.lec} ${styles.two}`}>
                <img src={"/images/lecturer2.png"} alt={"icon"} className={styles.lecImg} />
                <p className={styles.lecField}>레고</p>
            </div>
            <div className={`${styles.lec} ${styles.three}`}>
                <img src={"/images/lecturer3.png"} alt={"icon"} className={styles.lecImg} />
                <p className={styles.lecField}>메이커</p>
            </div>
            <div className={`${styles.lec} ${styles.four}`}>
                <img src={"/images/lecturer4.png"} alt={"icon"} className={styles.lecImg} />
                <p className={styles.lecField}>레고</p>
            </div>
            <div className={`${styles.lec} ${styles.five}`}>
                <img src={"/images/lecturer5.png"} alt={"icon"} className={styles.lecImg} />
                <p className={styles.lecField}>소프트웨어</p>
            </div>
            <p className={styles.info}>자세히 보기</p>
        </div>
    )
}