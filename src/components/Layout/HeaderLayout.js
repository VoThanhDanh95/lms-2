import Header from "./Header/Header.js";

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderLayout