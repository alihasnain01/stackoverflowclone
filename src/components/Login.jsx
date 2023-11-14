import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [loginErr, setLoginErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const hanldeLogin = async (e) => {
        e.preventDefault();
        setEmailErr('');
        setPasswordErr('');
        setIsLoading(true);
        setLoginErr('');
        axios.post('http://localhost:8000/api/signin', { email, password }).then(res => {
            setIsLoading(false);
            if (res?.data?.status === false) {
                setLoginErr(res?.data?.msg);
            }
        }).catch(err => {
            setIsLoading(false);
            var errors = err?.response?.data?.errors;
            errors?.email?.length > 0 ? setEmailErr(errors.email[0]) : setEmailErr('');
            errors.password?.length > 0 ? setPasswordErr(errors.password[0]) : setPasswordErr('');
        })

    }

    return (
        <div className="flex items-center justify-center mt-[120px]">
            <div className="border border-gray-200 rounded-lg shadow-md p-10 w-1/2">
                <h1 className="text-xl font-bold text-blue-700 mb-1 ">Welcome Back</h1>
                <p className="text-sm font-semibold text-gray-500 mt-3 mb-5">Please Enter Credentials</p>
                {
                    loginErr &&  <small className="text-red-500 font-semibold">{loginErr}</small>
                }

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
                            required
                        />
                        {
                            emailErr &&
                            <small className="text-red-500 font-semibold">{ emailErr}</small>
                        }
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
                            required
                        />
                         {
                            passwordErr &&
                            <small className="text-red-500 font-semibold">{ passwordErr}</small>
                        }
                    </div>

                    {
                        isLoading ?  <img src="https://img.icons8.com/fluent-systems-regular/100/000000/spinner.gif" alt="" />  : <button type="submit" className="border rounded-md p-2 font-md bg-gray-600 text-white">Login</button>
                    }
                      
                </form>
            </div>
        </div>
    )
}

export default Login;