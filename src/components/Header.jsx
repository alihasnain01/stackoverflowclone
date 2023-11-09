import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="w-full h-14 flex justify-between items-center px-4 md:px-32 bg-slate-800 top-0 sticky ">
                <div className="text-gray-300 text-xl font-bold">Red Overflow</div>
                <ul className="md:flex hidden font-semibold">
                    <li className="cursor-pointer text-gray-200 hover:text-gray-400 mx-[10px]"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer text-gray-200 hover:text-gray-400 mx-[10px]"><Link to="/about-us">About Us</Link></li>
                    <li className="cursor-pointer text-gray-200 hover:text-gray-400 mx-[10px]"><Link to="/contact-us">Contect Us</Link></li>
                </ul>
                <div className="hidden md:block px-3 py-2 bg-indigo-700 text-white cursor-pointer font-bold rounded">Login</div>
                <div className="md:hidden">
                    {/* <a className="text-4xl" href="#">&#8801;</a> */}
                </div>
            </nav>

            
        </>
    )
}

export default Header;