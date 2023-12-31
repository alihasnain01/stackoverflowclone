import { NavLink } from "react-router-dom";

const AuthHeder = () => {
    return (
        <div className="items-center hidden md:flex space-x-1">
            <NavLink
                to="/login"
                className={`text-white cursor-pointer font-bold ${(isActive) => isActive ? "text-blue-800" : ""}`}
            >Log in  </NavLink>
            <p className="text-white font-bold">|</p>
            <NavLink to="/signup" className=" text-green-700 cursor-pointer font-bold">Sign up</NavLink>
        </div >
    )
}

export default AuthHeder;