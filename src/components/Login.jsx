import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
        axios.post('http://localhost:8000/api/signin', { email, password }).then(res => {
            res = res;
            console.log('res ' + res);
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className="flex items-center justify-center mt-[120px]">
            <div className="border border-gray-200 rounded-lg shadow-md p-10 w-1/2">
                <h1 className="text-xl font-bold text-blue-700 mb-1 ">Welcome Back</h1>
                <p className="text-sm font-semibold text-gray-500 mt-3 mb-5">Please Enter Credentials</p>
                <form action="" onSubmit={hanldeLogin}>
                    <div className="mb-5">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="border rounded-md p-2 font-md bg-gray-600 text-white">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login;