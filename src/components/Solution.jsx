import { useState, useRef, useEffect } from "react";

const Solution = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const formatDate = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <div className="border border-gray-300 m-3 p-3 rounded-lg shadow-md" >
            <div className="flex justify-between">
                <small className="text-xs text-blue-300 mx-1 font-semibold">({formatDate(props.issue.created_at)})</small>
                <div className="relative" ref={dropdownRef}>
                    <img className="cursor-pointer" width="20" height="60" src="https://img.icons8.com/ios-glyphs/60/menu-2.png" alt="menu-2" onClick={() => setMenuOpen(!menuOpen)} />
                    {menuOpen && <div className="absolute w-24 rounded-lg top-4 right-3 border border-gray-300 shadow-lg bg-white">
                        <li className="block m-5 text-sm font-semibold hover:cursor-pointer">Edit</li>
                        <li className="block m-5 text-red-500 text-sm font-semibold hover:cursor-pointer">Delete</li>
                    </div>
                    }

                </div>
            </div>
            <div className="mt-2 ml-1" dangerouslySetInnerHTML={{ __html: props.issue.description }} />
        </div>
    )
}

export default Solution;
