import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
import Button from "../Button";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 w-full md:w-auto flex justify-between items-center">
                    <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        {
                            open ? <MdOutlineClose /> : <MdOutlineMenu />
                        }
                    </div>
                </div>
                {/* for big screen */}
                <ul className="hidden md:flex uppercase items-center gap-8">
                    <li className="py-7 px-3 inline-block"><Link to="/">Home</Link></li>
                    <NavLinks></NavLinks>
                </ul>
                <div className="md:block hidden">
                    <Button></Button>
                </div>
                {/* for mobile */}
                <ul className={`md:hidden w-full h-full bg-white absolute bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <li className="py-7 px-3 inline-block"><Link to="/">Home</Link></li>
                    <NavLinks></NavLinks>
                    <div className="py-5">
                        <Button></Button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;