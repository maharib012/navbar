import { Link } from "react-router-dom";
import { links } from "./Mylinks"
import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const NavLinks = () => {

    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {
                links.map((link, index) => {
                    return (
                        <div key={index}>
                            <div className="px-3 text-left md:cursor-pointer group">
                                <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group" onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading('');
                                    setSubHeading("");
                                }}>
                                    {link.name}
                                    <span className="text-xl md:hidden inline">
                                        {
                                            heading === link.name ? <FiChevronUp /> : <FiChevronDown />
                                        }
                                    </span>
                                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden duration-500 group-hover:rotate-180">
                                        {
                                            heading === link.name ? <FiChevronUp /> : <FiChevronDown />
                                        }
                                    </span>
                                </h1>
                                {
                                    link.submenu && <div>
                                        <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                            <div className="py-3">
                                                <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                                            </div>
                                            <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                                {
                                                    link.sublinks.map((mysublink, ind) => {
                                                        return (
                                                            <div key={ind}>
                                                                <h1 className="text-lg font-semibold">{mysublink.head}</h1>
                                                                {
                                                                    mysublink.sublink.map((slink, i) => {
                                                                        return (
                                                                            <li className="text-sm text-gray-600 my-2.5" key={i}>
                                                                                <Link to={slink.link} className="hover:text-primary">
                                                                                    {slink.name}
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            {/* mobile view for menu */}
                            <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                                {
                                    link.sublinks.map((slinks, index) => (
                                        <div key={index}>
                                            <div>
                                                <h1 onClick={() => subHeading !== slinks.head ? setSubHeading(slinks.head) : setSubHeading('')} className="py-4 pl-7 flex justify-between items-center font-semibold md:pr-0 pr-5">
                                                    {slinks.head}
                                                    <span className="text-xl md:mt-1 md:ml-2 inline">
                                                        {
                                                            subHeading === slinks.head ? <FiChevronUp /> : <FiChevronDown />
                                                        }
                                                    </span>
                                                </h1>
                                                <div className={`${subHeading === slinks.head ? "md:hidden" : "hidden"}`}>
                                                    {
                                                        slinks.sublink.map((slink, index) => (
                                                            <li key={index} className="py-3 pl-14">
                                                                <Link to={slink.link} className="hover:text-primary">
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default NavLinks;