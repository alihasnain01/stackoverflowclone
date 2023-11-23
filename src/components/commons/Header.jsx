
import { NavLink } from "react-router-dom";
import { isLogin } from "../../App";
import HeaderDropDown from "../HeaderDropDown";
import AuthHeder from "./AuthHeader";
const Header = () => {
    return (
        <>
            <nav className="w-full h-14 flex justify-between items-center space-x-4 px-3 md:px-32 bg-gray-700 top-0 sticky ">
                <div className="text-gray-300 text-xl font-bold">Red Overflow</div>
                <ul className="md:flex hidden font-semibold space-x-8 cursor-pointer text-gray-200">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400 " : "text-gray-200 hover:text-gray-400"} >Home</NavLink>
                    <NavLink to="/categories" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400" : "text-gray-200 hover:text-gray-400"}>Categories</NavLink>
                    <NavLink to="/users" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400" : "text-gray-200 hover:text-gray-400"}>Users</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold border-b-2 border-yellow-400" : "text-gray-200 hover:text-gray-400"}>About Us</NavLink>
                </ul>

                {
                    !isLogin.value ? <AuthHeder /> :
                        <div className="hidden md:block">
                            <HeaderDropDown />
                        </div>
                }

                <div className="md:hidden flex flex-row justify-end">
                    <div className="mt-1.5">
                        <HeaderDropDown />
                    </div>

                    <button className="text-4xl" href="#">&#8801;</button>
                </div>


            </nav >
        </>
    )
}

export default Header;