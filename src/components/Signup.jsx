import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { isLogin } from "../App";

const Signup = () => {

    const navigate = useNavigate();
    const [signinErr, setSigninErr] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signinHandler = (e) => {
        e.preventDefault();
        setEmailErr('');
        setPasswordErr('');
        setSigninErr('');
        setIsLoading(true);
        axios.post('http://localhost:8000/api/signup', { name, email, password }).then(res => {
            setIsLoading(false);
            if (res?.data?.status === false) {
                setSigninErr(res?.data?.msg);
            } else {
                localStorage.setItem('user', JSON.stringify(res?.data?.data));
                isLogin.value = res?.data?.data;
                navigate('/');
            }
        }).catch(err => {
            setIsLoading(false);
            var errors = err?.response?.data?.errors;
            errors?.name?.length > 0 ? setNameErr(errors.name[0]) : setNameErr('');
            errors?.email?.length > 0 ? setEmailErr(errors.email[0]) : setEmailErr('');
            errors?.password?.length > 0 ? setPasswordErr(errors.password[0]) : setPasswordErr('');
        })
    }

    return (
        <div className="flex items-center justify-center mt-[120px]">
            <div className="border border-gray-200 rounded-lg shadow-md p-10 w-1/2">
                <h1 className="text-xl font-bold text-green-700 mb-5 ">Welcome to RedStack</h1>
                {
                    signinErr && <small className="text-red-500 font-semibold">{signinErr}</small>
                }

                <form action="" onSubmit={signinHandler}>
                    <div className="mb-5">
                        <label htmlFor="email">Name</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            className="p-2 border rounded-md w-full"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {
                            nameErr &&
                            <small className="text-red-500 font-semibold">{nameErr}</small>
                        }
                    </div>
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
                            <small className="text-red-500 font-semibold">{emailErr}</small>
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
                            <small className="text-red-500 font-semibold">{passwordErr}</small>
                        }
                    </div>

                    {
                        isLoading ? <img src="https://img.icons8.com/fluent-systems-regular/100/000000/spinner.gif" alt="" /> : <button type="submit" className="border rounded-md p-2 font-md bg-gray-600 text-white">Sign Up</button>
                    }

                </form>
            </div>
        </div>
    )
}

export default Signup;