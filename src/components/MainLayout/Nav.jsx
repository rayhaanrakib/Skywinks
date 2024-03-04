import { CiGlobe } from "react-icons/ci";
import { NavLink } from "react-router-dom";


const Nav = () => {


    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-secondary " : ""
                }
            >
                home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/destinations"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-secondary " : ""
                }
            >
                destinations
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/plan"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-secondary " : ""
                }
            >
                tour plan
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-secondary " : ""
                }
            >
                other services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-secondary " : ""
                }
            >
                about
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-secondary " : ""
                }
            >
                Contact
            </NavLink>
        </li>
    </>

    return (
        <div className='bg-base-100 bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 shadow-sm z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="drawer z-40">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            <div className="w-full navbar">
                                <div className="flex-none lg:hidden mr-3">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <a href='/' className="inline-block lg:text-2xl font-medium md:font-semibold">SkyWinks Agency</a>

                            </div>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu flex gap-3 capitalize font-medium text-[#3f4563] p-4 w-80 min-h-full bg-slate-100 pt-10">
                                {navlinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 capitalize font-[500] leading-[25.5px] text-[15px] text-secondaryV">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="destinations" className="flex items-center">
                        <button className="cursor-pointer bg-transparent hover:bg-transparent border-none text-secondaryV">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </NavLink>

                    <div className="dropdown dropdown-end dropdown-hover transition-all duration-800">
                        <div tabIndex={0} role="button" className="m-1 rounded-sm text-sm py-2 px-3 bg-transparent font-semibold ">
                            <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-secondaryV focus:ring-2 focus:ring-transparent ">
                                <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/usa-circular.png" alt="usa-circular" />
                                English (US)
                            </a>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52 font-semibold">
                            <li>
                                <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="en">
                                    <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/usa-circular.png" alt="usa-circular" />
                                    English (US)
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="bn">
                                    <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/color/96/bangladesh-circular.png" alt="bangladesh-circular" />
                                    Bengali (বাংলা)
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="in">
                                    <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/india-circular.png" alt="india-circular" />
                                    Hindi (हिन्दी)
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="zh">
                                    <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/china-circular.png" alt="china-circular" />
                                    中文 (繁體)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;