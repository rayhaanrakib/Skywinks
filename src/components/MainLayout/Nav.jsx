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
                to="/other-services"
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
        <div className='bg-base-100 bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 right-0 shadow-sm z-50'>
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
                                <a href='/' className="w-[60px]"><img src="/logo.png" alt="Skywinks" /></a>

                            </div>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu flex gap-5 capitalize font-medium text-[#3f4563] p-4 w-80 min-h-full bg-slate-100 pt-10">
                                {navlinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 capitalize font-medium text-[16px] text-secondaryV">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <CiGlobe className="text-2xl" />
                            <span className="badge badge-xs badge-accent indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;