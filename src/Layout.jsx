import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
    return(
        <div>
            <Navbar></Navbar>
            <div className="bg-[#edf0f2] py-20">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;