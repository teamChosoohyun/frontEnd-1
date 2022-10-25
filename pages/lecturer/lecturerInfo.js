import styles from '../../styles/lecturer/lecturerInfo.module.css'

export default function LecturerInfo({ img, name, category, email }) {
    return (
        <div className={styles.info}>
            <img src={img} alt={"icon"} className={styles.img} />
            <p className={styles.name}>{name}</p>
            <p className={styles.category}>{category}</p>
            <p className={styles.email}>{email}</p>
        </div>
    )
}