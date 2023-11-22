import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/constants";
import Solution from "./Solution";
import SolutionSidebar from "./SolutionSidebar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { isLogin } from "../App";
import { Link } from "react-router-dom";

const IssueDetail = () => {
    const { id } = useParams();
    const [issue, setIssue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');
    const location = useLocation();

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };

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

    useEffect(() => {
        fetchIssue();

        // eslint-disable-next-line
    }, [])

    const fetchIssue = async () => {
        setIsLoading(true);
        await axios.get(base_url + `issues/${id}`).then(res => {
            setIssue(res?.data?.data);
            setIsLoading(false);
        }).catch(err => console.log(err));
    }

    const submitSolution = async () => {
        if (value) {
            const user = JSON.parse(localStorage.getItem('user'));
            const config = {
                headers: { Authorization: `Bearer ${user?.token}` }
            };

            await axios.post(base_url + `issues/${id}/solutions`, { description: value }, config).then(res => {
                // setIssue(res?.data?.data);
                // setValue('');
                // setIsLoading(false);
                console.log(res);
            }).catch(err => console.log(err));
        }
    }

    return (
        <div className=" flex justify-between">
            {
                isLoading &&
                <div className="flex items-center justify-center ml-[200px] md:ml-[600px] mt-60">
                    <img src="https://img.icons8.com/fluent-systems-regular/100/000000/spinner.gif" alt="" />
                </div>
            }

            {(!isLoading && issue) && <SolutionSidebar issue={issue} />}

            {
                issue &&
                <div className="w-full mt-12 m-10">
                    <h1 className="text-xl text-gray-800 font-medium">
                        {issue.title} <small className="text-blue-300 mx-1 font-semibold text-xs">({formatDate(issue.created_at)})</small>
                    </h1>
                    <p className="text-gray-500 mt-8">{issue.description}</p>
                    <div className="w-full mt-8">
                        <h3 className="text-xl text-gray-600 font-medium">Solutions</h3>
                        {
                            issue.solutions.length > 0 ?
                                issue.solutions.map((item, index) => (
                                    <Solution key={index} issue={item} />
                                )) : <p className="text-gray-400 font-semibold mt-5 ml-2">No solution yet</p>
                        }
                    </div>

                    <div className="w-full mt-20 m-2 p-2">
                        <ReactQuill className="h-80" modules={modules} theme="snow" value={value} onChange={setValue} placeholder="Write your solution" readOnly={!isLogin.value ? true : false} />
                        {
                            isLogin.value ?
                                <div className="w-full ml-1 mt-10">
                                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg mt-4" onClick={submitSolution}>Submit</button>
                                </div>
                                : <div className="w-full ml-1 mt-16">
                                    <Link to='/login' className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg mt-4" state={{ from: location }}>Login to submit</Link>
                                </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default IssueDetail;