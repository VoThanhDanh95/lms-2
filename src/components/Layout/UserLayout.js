import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from './UserLayout.module.scss'


function UserLayout({ children }) {
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

export default UserLayout