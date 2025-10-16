import { IoMdCall } from "react-icons/io";
import logo from "../assets/footer-logo.png"
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
    return(
        <footer className="w-full bg-[#002077] absolute sm:footer-horizontal lg:px-30 text-neutral-content space-y-10 lg:space-y-0  p-10">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between ">
                <div>
                    <a className="text-xl">
                        <img src={logo} className="h-[50px]"></img>
                    </a>
                    <p className="max-w-[500px]">
                        Connecting Innovation, Culture, and Community – Uniting Bangladeshi-American tech professionals to foster creativity, celebrate our heritage, and build meaningful connections that drive personal and professional growth.
                    </p>
                </div>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebookF size={24} />
                        <FaYoutube size={24} />
                        <FaLinkedinIn size={24} />
                        <FaTwitter size={24} />
                    </div>
                </nav>
            </div>
            
            <div className="mt-5">
                <div className="lg:flex justify-between">
                    <p className="text- flex items-center gap-2">
                        <IoMdCall size = {24}/>
                        <p>929-301-6744</p>
                    </p>
                    <p className="text-xl flex items-center gap-2">
                        <IoMail size={24} />
                        <p>info@dubana.com</p>
                    </p>
                    <p className="text-xl flex items-center gap-2">
                        <FaMapMarkerAlt size={24} />
                        <p>625W 57th St, New York, NY 10019</p>
                    </p>
                </div>
                <div className="border-t my-4 border-white" ></div>
                <aside>
                    <p className="text-center">© {new Date().getFullYear()} Dubana. All Rights Reserved. Designed & Developed by <span className="font-semibold">Wyth Myth</span></p>
                </aside>
            </div>
        </footer>
    )
}

export default Footer;