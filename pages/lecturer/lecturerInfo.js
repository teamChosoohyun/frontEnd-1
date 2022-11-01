import styles from '../../styles/lecturer/lecturerInfo.module.css'
import {useRouter} from "next/router";

export default function LecturerInfo({ img, name, category, email }) {
    const router = useRouter();
    return (
        <div className={styles.info} onClick={()=> {
            router.push("/lecturer/detail")
        }}>
            <img src={img} alt={"icon"} className={styles.img} />
            <p className={styles.name}>{name}</p>
            <p className={styles.category}>{category}</p>
            <p className={styles.email}>{email}</p>
        </div>
    )
}