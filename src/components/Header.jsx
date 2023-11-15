import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {

    const state = useSelector((state) => state)
    console.log(state);

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsLogin(true);
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, [])

    return (
        <div className="overflow-hidden">
            <nav className="w-full h-14 flex justify-between items-center px-4 md:px-32 bg-gray-700 top-0 sticky ">
                <div className="text-gray-300 text-xl font-bold">Red Overflow</div>
                <ul className="md:flex hidden font-semibold space-x-10 cursor-pointer text-gray-200">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold" : "text-gray-200 hover:text-gray-400"} >Home</NavLink>
                    <NavLink to="/categories" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold" : "text-gray-200 hover:text-gray-400"}>Categories</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "text-gray-400 font-extrabold" : "text-gray-200 hover:text-gray-400"}>About Us</NavLink>
                </ul>

                {
                    !isLogin ?
                        <div className="flex items-center space-x-2">
                            <div className="hidden md:block px-3 py-2 text-white cursor-pointer font-bold rounded border"><NavLink to="/login">Log in</NavLink></div>
                            <div className="hidden md:block px-3 py-2 bg-indigo-700 text-white cursor-pointer font-bold rounded"><NavLink to="/signup">Sign Up</NavLink></div>
                        </div>
                        : <div className="flex items-center space-x-2">
                            <p className="hidden md:block text-white font-semibold">Welcome, {user.name} | </p>
                            <p className="hidden md:block text-red-500 font-bold cursor-pointer" onClick={() => { localStorage.removeItem('user'); setIsLogin(false); }}>Logout</p>
                        </div>
                }

                <div className="md:hidden">
                    <a className="text-4xl" href="#">&#8801;</a>
                </div>
            </nav >


        </div>
    )
}

export default Header;