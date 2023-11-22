
import { NavLink } from "react-router-dom";
import { isLogin } from "../App";

const Header = () => {
    return (
        <div className="overflow-hidden">
            <nav className="w-full h-14 flex justify-between items-center px-4 md:px-32 bg-gray-700 top-0 sticky ">
                <div className="text-gray-300 text-xl font-bold">Red Overflow</div>
                <ul className="md:flex hidden font-semibold space-x-10 cursor-pointer text-gray-200">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400 " : "text-gray-200 hover:text-gray-400"} >Home</NavLink>
                    <NavLink to="/categories" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400" : "text-gray-200 hover:text-gray-400"}>Categories</NavLink>
                    <NavLink to="/users" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400" : "text-gray-200 hover:text-gray-400"}>Users</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400" : "text-gray-200 hover:text-gray-400"}>About Us</NavLink>
                </ul>

                {
                    !isLogin.value ?
                        <div className="flex items-center space-x-2">
                            <NavLink to="/login">  <div className="hidden md:block px-3 py-2 text-white cursor-pointer font-bold rounded border">Log in</div></NavLink>
                            <NavLink to="/signup"><div className="hidden md:block px-3 py-2 bg-indigo-700 text-white cursor-pointer font-bold rounded">Sign Up</div></NavLink>
                        </div>
                        : <div className="flex items-center space-x-2">
                            <p className="hidden md:block text-white font-semibold">Welcome, {isLogin.value.name} | </p>
                            <p className="hidden md:block text-red-500 font-bold cursor-pointer" onClick={() => { isLogin.value = ''; }}>Logout</p>
                        </div>
                }

                <div className="md:hidden">
                    <button className="text-4xl" href="#">&#8801;</button>
                </div>
            </nav >
        </div>
    )
}

export default Header;