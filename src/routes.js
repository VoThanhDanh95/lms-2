import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import TestCollection from "./pages/TestCollection";
import Profile from "./pages/Profile";
import UserLayout from "./components/Layout/UserLayout"
import HeaderLayout from "./components/Layout/HeaderLayout";
import { Fragment } from "react";
const routes = [
    {
        path: '/',
        exact: true,
        layout: UserLayout,
        component: Home
    },
    {
        path: '/test',
        exact: true,
        layout: null,
        component: TestCollection
    },
    {
        path: '/profile',
        exact: true,
        layout: HeaderLayout,
        component: Profile
    },
]

function renderRoutes() {
    return (
        <div className="App">
            <Routes>
                {routes.map((ele, idx) => {
                    const Comp = ele.component
                    const path = ele.path
                    let Layout = ele.layout == null ? Fragment : ele.layout
                    console.log('Layout ', Layout)
                    return (
                        <Route
                            key={idx}
                            path={path}
                            element={
                                <Layout>
                                    <Comp />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </div>
    )
}

export default renderRoutes