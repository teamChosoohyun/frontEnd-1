import styles from '../../styles/main/intro.module.css';

export default function Intro(){
    return(
        <div className={styles.intro}>
            <div className={styles.introText}>
                <p className={styles.text}>당신의 아이들을 위해</p>
                <p className={styles.text}>모인 협동조합</p>
            </div>
            <div className={styles.imgSize}>
                <img src={"/images/codingmom.png"} alt={"icon"} className={styles.introImg} />
                <div className={styles.remarks}>
                    <p className={styles.remarksText}>뭔가 코딩맘을 아우러서 소개하는 내용이 들어갔으면 좋을 것 같은 영역</p>
                    <p className={styles.info}>자세히 보기 ></p>
                </div>
            </div>
        </div>
    )
}