import React, { useState } from 'react';
import { isLogin } from "../App";
const HeaderDropDown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex items-center space-x-4">
            <div className="relative">
                <button
                    className="flex items-center text-white focus:outline-none"
                    onClick={toggleDropdown}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"  // Replace with your avatar image URL
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="hidden md:block"> {isLogin.value.name}</span>
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-10 mt-4 w-40 bg-white border border-gray-300 rounded shadow-lg">
                        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer w-full text-left">
                            <img width={20} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                            Profile
                        </button>
                        <hr />
                        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer w-full text-left">
                            <img src="" alt="" />
                            Settings
                        </button>
                        <hr />
                        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer w-full text-left" onClick={() => { isLogin.value = ''; }}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HeaderDropDown;