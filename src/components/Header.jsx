import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="w-full h-14 flex justify-between items-center px-4 md:px-32 bg-gray-700 top-0 sticky ">
                <div className="text-gray-300 text-xl font-bold">Red Overflow</div>
                <ul className="md:flex hidden font-semibold space-x-10 cursor-pointer text-gray-200">
                    <NavLink to="/" className="hover:text-gray-400 " >Home</NavLink>
                    <NavLink to="/categories" className="hover:text-gray-400 ">Categories</NavLink>
                    <NavLink to="/about-us" className="hover:text-gray-400">About Us</NavLink>

                </ul>

                <div className="flex items-center space-x-2">
                    <div className="hidden md:block px-3 py-2 text-white cursor-pointer font-bold rounded border"><NavLink to="/login">Log in</NavLink></div>
                    <div className="hidden md:block px-3 py-2 bg-indigo-700 text-white cursor-pointer font-bold rounded"><NavLink to="/login">Sign Up</NavLink></div>
                </div>

                <div className="md:hidden">
                    <a className="text-4xl" href="#">&#8801;</a>
                </div>
            </nav>


        </>
    )
}

export default Header;