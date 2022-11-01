import Link from "next/link";
import styles from '../../styles/header/mainHeader.module.css'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import {useRef, useState} from "react";
import Image from "next/image";
export default function MainHeader()
{
    const [header, setHeader] = useState(true);
    const headerRef = useRef();

    useScrollPosition(({currPos})=>{
        const scrollY = Math.abs(currPos.y);
        if(scrollY >= 50){
            headerRef.current.classList.add(styles.invisible);
        }
        else if(scrollY === 0) {
            headerRef.current.classList.remove(styles.invisible)
        }
    }, [header])
    
    return(
        <div className={styles.header} ref={headerRef}>
            <span className={styles.headerImg}>
                <Image src="/images/image5.png" alt={"icon"} width={80} height={80} ></Image>
            </span>
            <div className={styles.nav}>
                <Link href="/Intro/introduction"><span>코딩맘 소개</span></Link>
                <Link href="/lecturer/lecturerList"><span>강사 소개</span></Link>
                <Link href="/contents/all"><span>컨텐츠 소개</span></Link>
                <Link href="/"><span>교구 소개</span></Link>
            </div>
            <div className={styles.auth}>
                <Link href="/"><span>로그인</span></Link>
                <Link href="/login/loginpage"><span>회원가입</span></Link>
            </div>
        </div>
    )
}
