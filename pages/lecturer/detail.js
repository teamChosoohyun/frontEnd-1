import Image from "next/image";
import React, { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { Header, Footer } from "../allFiles";
import styles from "../../styles/lecturer/detail.module.css"
import styled from "styled-components"; 
import classNames from "classnames";

export default function Detail() {
    const [value, setValue] = useState(new Date());

    return (
        <div className={styles.detail}>
            <Header/>                
            <div className={styles.blue}>
                <div className={styles.center}>
                    <span className={classNames(styles.img)}>
                        <Image src="/images/lecturer.png" alt="" width={800} height={500} className={styles.img} layout={"fixed"} />
                    </span>
                    <div className={styles.flex}>
                        <Work color="#FFA41D">
                            <Text color="white">출근</Text>
                            <Text2>AM 9:30</Text2>
                        </Work>
                        <Work color="#C8C8C8">
                            <Text color="black">퇴근</Text>
                            <Text2>AM 9:30</Text2>
                        </Work>
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.bold}>박춘배</p>
                    <p>소프트웨어 분야</p>
                    <p>email@gmail.com</p>
                </div>
                <div className={styles.center}>
                    <Calendar onChange={setValue} value={value}></Calendar>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

const Work = styled.div`
    width: 340px;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${({ color }) => color };
    border-radius: 15px;
    margin-right: 50px;
    margin-left: 50px;
`

const Text = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 39px;
    margin: 0 40px 0 25px;
    color: ${({color})=> color};
`

const Text2 = styled.span`
    width: 220px;
    height: 45px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`