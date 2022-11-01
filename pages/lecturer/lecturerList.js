import {Footer, Header, LecturerInfo} from "../allFiles";
import styles from "../../styles/lecturer/lecturerList.module.css";
import styled from 'styled-components';
import {useRouter} from "next/router";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  column-gap: 10em;
  row-gap: 2em;
`

export default function LecturerList() {
    return (
        <div className={styles.lecturer}>
            <Header/>
            <div className={styles.lecturerList}>
                <div className={styles.category}>
                    <div className={styles.categoryButton} >
                        <span>소프트웨어 강사</span>
                    </div>
                    <div className={styles.categoryButton} >
                        <span>레고 강사</span>
                    </div>
                    <div className={styles.categoryButton} >
                        <span>메이커 강사</span>
                    </div>
                    <div className={styles.categoryButton} >
                        <span>기타</span>
                    </div>
                </div>
                <div className={styles.flex}>
                    <Grid>
                        <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                        <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                        <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                        <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                        <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                        <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                    </Grid>
                </div>
                <Footer/>
            </div>
        </div>
    )
}