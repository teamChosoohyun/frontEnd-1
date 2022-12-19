import styles from "../../styles/login/login2.module.css";
// import { useRouter } from "next/router";
// import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { kakaoUserInfo } from "../../util/user";
import { instance } from "../../util/axiosSetting";
import Image from "next/image";

export default function Login2() {
    const [user, setUSer] = useRecoilState(kakaoUserInfo)

    // function handlelecture() {
    //     $('#wow').css('opacity', '1');
    //     $('#wow').css('pointer-events', 'auto');
    // }
    // function handleout () {
    //         $('#wow').css('opacity', '0.2',);
    //         $('#wow').css('pointer-events', 'none');
    // }
    // const router = useRouter();
    // const encodeFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     return new Promise((resolve) => {
    //         reader.onload = () => {
    //             setImageSrc(reader.result);
    //             resolve();
    //         };
    //     });
    // }
    // const [imageSrc, setImageSrc] = useState('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFxcXFxUXGBcXFRcXFxcXFxcXGBcYHSggGB0lHR0XITEiJSkrLi4uHR8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQsAvQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIF/8QAIxABAQEAAQIGAwEAAAAAAAAAAAER8AJBMXGBkaHBIWHRsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqLFVASR0GYYlAWLEsBYqtIM4cRoCRYpUCxYagFRtEBYoiAWJAqcBgCEYdAYUgVi1loFKloBU0VQEcSoDEjAEOIAarBh0FILDEAVhwUFWt9QpAZpS0EsOq0AahoI4DoBU9IA6FVANSwAoqsQKRGoAUgWCpAaJh1AIlToAiICoNIDEUAOoYCRwAQpSAR1AIlqBKkAliQKxrpZhl8wBSsAWrSgEhg1SgsRqAJYQBBAIgEbAqCWEaBkCtIDUiAakZjUBlVWKAUCASVA0I6CEIAyrBD0wBasVNAVVHQCiOAhUgSiiAmfthvQZwhUEeqBAod/YQJdlCANQBYrUgKwRAopEgIxHQEMiQCKKIDiVinOwCxEaBqkB0EMRAVUgEkgIxGAhVqBGDUCSIIYpVQWLEYAa6QICUqQJWlUBCLECRwQCsVGgZARoGxBARp0AVYFAMVCBaRpgA6KYAMqEoLEtIJDUCMgQJIgFiIIRagRoVAhHQBBoBVYcAYYsGgcCAEpAFYqQSBoCmhAoRUCNC0FUVoCQioEkdAJUwAcZrUgCpUgqhUCS1YClURgAhAYqgBQ0858gIaEBQWgiLeyBEKAmpBh6QZw9IMgIVICgtAoKAYIjQEVMAKmMmwFTIIZQBvylQUXOfA1AsUihAUwaZPMEEgSiMARYQCxHQCVS0FqR0BhygwEKkClKAKGc57g6AlIICENdNBlYkBFRAaj+BAUUSBQ2ikFixIAtNEBQ4gBQ06CGqrARVFBGDSApznsMO/kEggRgsQFYNIBVICDV0+IBVEBq0qAyYVQVBqgBHVAFak8/Rk6Ah09U56DfD1AQwi+F9QSSARI0FFUJ353AqG89wAKU/n2Co0xXxAKk9M/z7gMwqKgqqp352gn2C0wNdN/AP/9k=');
    // const handleChangeFile = (e) => {
    //     encodeFile(e.target.files[0]);
    // }

    const change = (e) => {
        const { name, value } = e.target;
        const newInput = {
            ...user,
            [name]: value,
        }
        setUSer(newInput);
    }

    const postUserJoin = () => {
        console.log(user)
        const data = new FormData();

        data.append("name", user.name);
        data.append("kakaoid", user.k_id);
        data.append("k_img_url", user.k_img_url);
        data.append("type", user.type);

        instance.post("/user/join", data, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res)=>{
            if(res.data === 'success') window.location.href = "/"
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className={styles.loginmain}>
            <div className={styles.logins}>
                <div className={styles.filebox}>
                    <span>
                        <Image src={"/images/logong.png"}  width={400} height={300} />
                    </span>
                </div>
                <div className={styles.inputbox}>
                    <p className={styles.p1}>회원명을 입력해 주세요</p>
                    <input type="text" name="name" value={user.name} onChange={change} className={styles.name} />
                    <p className={styles.p1}>회원 유형을 선택해 주세요</p>
                    <div className={styles.users}>
                        <input id="lecture" type="radio" name="type" value="1" onChange={change} />
                        <label for="lecture" className={styles.labels1}>강사</label>
                        <input id="user" type="radio" name="type" value="2" onChange={change} />
                        <label for="user" className={styles.labels2}>외부인</label>
                    </div>
                    {/* <div id="wow">
                        <p className={styles.p2}><b>강의 유형을 선택해 주세요(중복선택 가능)</b></p>
                        <div className={styles.lectures}>
                            <label className={styles.lab1}><input type="radio" name="part" value="lego" /><b>레고</b></label>
                            <label className={styles.lab2}><input type="radio" name="part" value="sw" /><b>소프트웨어</b></label>
                            <label className={styles.lab2}><input type="radio" name="part" value="maker" /><b>메이커</b></label>
                            <label className={styles.lab2}><input type="radio" name="part" value="etc" /><b>기타</b></label>
                        </div>
                    </div> */}
                    <div className={styles.buttonbox}>
                        <button className={styles.gosign} onClick={postUserJoin}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    )
}