import Header from "./Header/Header";
import styles from './ExerciseLayout.module.scss'

function ExerciseLayout({ children }) {
    return (
        <div className={styles['wrapper']}>
            <Header />
            <div className={styles["container"]}>
                <Sidebar />
                <div className={styles["content"]}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ExerciseLayout