import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function Layout() {
    return(
        <div>
            <Navbar></Navbar>
            <div className="bg-[#edf0f2] py-20">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout;