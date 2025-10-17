import { Link } from "react-router";
import logo from "../assets/logo.png"
function Navbar() {
    const links = <>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/my-payment">My Payment</Link></li>
        <li><Link to = "/error">Members</Link></li>
        <li><Link to = "/error">Be a Member</Link></li>
        <li><Link to = "/error">Executives</Link></li>
        <li><Link to = "/error">Dubana Talk</Link></li>
        <li><Link to = "/error">Articles</Link></li>
        <li><Link to = "/error">Activity</Link></li>
        <li><Link to = "/error">Gallery</Link></li>
        <li><Link to = "/error">About Us</Link></li>
    </>
    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl">
                    <img src = {logo} className="h-[50px]"></img>
                </a>
            </div>
            <div className="navbar-end space-x-8 w-full">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {links}
                </ul>
                <a className="btn">Login</a>
            </div>
        </div>
    )
}

export default Navbar;