import axios from "axios"
import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        document.title = 'Users'
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res?.data);
            setUsers(res?.data);
        }).catch(err => console.log(err));
    }, [])

    function searchCategory(val) {

    }

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="mt-1 text-gray-500 font-normal w-2/3">List of users, where you can find user which is best and trending on Redstack</p>

            <div className="mt-8">
                <div className="ml-1 mb-5 flex justify-end">
                    <input type="text" className="p-2 border border-gray-300 rounded-md focus:border-gray-600" placeholder="search user" onKeyUp={(e) => searchCategory(e.target.value)} />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {
                        users.map((user, index) => (
                            <li key={index} className="col-span-1 bg-white border rounded-lg shadow divide-y divide-gray-200">
                                <div className="w-full flex items-center justify-between p-6 space-x-6">
                                    <div className="flex-1 truncate">
                                        <div className="flex items-center space-x-3">
                                            <img src="https://img.icons8.com/color/48/user.png" alt="" className="h-10 w-10 rounded-full" />
                                            <h3 className="text-gray-900 text-sm font-medium truncate">{user.name}</h3>
                                        </div>
                                        <p className="mt-1 text-gray-500 text-sm truncate">{user.email}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </>
    )
}

export default Users