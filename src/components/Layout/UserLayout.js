import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import { Outlet } from "react-router-dom";

function UserLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default UserLayout