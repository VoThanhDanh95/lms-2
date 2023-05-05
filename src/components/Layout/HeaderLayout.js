import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import { Outlet } from "react-router-dom";

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default HeaderLayout