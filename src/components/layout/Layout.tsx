import { Outlet } from "react-router-dom";

import './layout.sass'

const Layout = () => {
    return (
        <>

            <Outlet />
            <div className="menu">
                <button className="main__button">Получить TON</button>
            </div>
        </>
    )
};

export default Layout;