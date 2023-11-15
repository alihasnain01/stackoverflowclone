import { useEffect, useState } from "react";
import axios from "axios";
import Issue from "./Issue";
import { base_url } from "../utils/constants";

const Home = () => {

    const [pageNo, setPageNo] = useState(1);
    const [totalPage, setTotalPage] = useState('');
    const [total, setTotal] = useState(0);
    const [topicId, setTopicId] = useState('');
    const [topics, setTopics] = useState([]);
    const [issues, setIssues] = useState([]);
    const [topicName, setTopicName] = useState('Latest Issues');
    const [search, setSearch] = useState('');
    const [nextPage, setNextPage] = useState(true);
    const [prevPage, setPrevPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isIssueLoading, setIsIssueLoading] = useState(false);

    useEffect(() => {
        document.title = 'Home';
        fetchTopics();
    }, []);

    useEffect(() => {
        fetchIssues();
    }, [pageNo, topicId, search]);

    const fetchTopics = async () => {
        setIsLoading(true);
        await axios.get(base_url + 'topics')
            .then(res => {
                setIsLoading(false);
                setTopics(res?.data.data);;
            }).catch(err => console.log(err));
    }

    const fetchIssues = async () => {
        setIsIssueLoading(true);
        await axios.get(base_url + "issues?" + (topicId ? `?id=${topicId}` : '') + (search ? `&search=${search}` : "") + (pageNo > 0 ? `&page=${pageNo}` : "")).then(res => {
            res?.data?.data?.prev_page_url ? setPrevPage(true) : setPrevPage(false);
            res?.data?.data?.next_page_url ? setNextPage(true) : setNextPage(false);
            res?.data?.data?.last_page ? setTotalPage(res?.data?.data?.last_page) : setTotalPage('');
            res?.data?.data?.total ? setTotal(res?.data?.data?.total) : setTotal(0);
            setIssues(res?.data?.data?.data);
            setIsIssueLoading(false);
        }).catch(err => console.log(err));
    }

    const searchIssue = (search) => {
        let name = search ? search : 'Latest Issues';
        setTopicName(name);
        setPageNo(1);
        setTopicId('');
        setSearch(search);
    }

    const changeTopic = (id, name) => {
        setTopicName(name);
        setTopicId(id);
        setPageNo(1);
        setSearch('');
    }

    return (
        <div className="w-full flex justify-between">
            <div className="w-1/4 items-center flex flex-col" >
                <h1 className="text-2xl font-bold">Categories</h1>
                <div className="mt-10 ">
                    <ul className="text-lg space-y-1">
                        {
                            isLoading && <img className="mt-10" src="https://img.icons8.com/fluent-systems-regular/100/000000/spinner.gif" alt="" />
                        }
                        {
                            !isLoading && topics.length > 0 ?
                                topics.map((item, index) => (
                                    <li className={topicId === item.id ? "text-gray-700 cursor-pointer font-bold underline underline-offset-3" : "cursor-pointer font-semibold text-gray-400"} onClick={() => changeTopic(item.id, item.name)} key={index}>{item.name}</li>
                                ))
                                : !isLoading && <p className=" text-gray-400">No topics found</p>
                        }
                    </ul>
                </div>
            </div>
            <div className="w-full mx-10">
                <div className="flex space-x-5 md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Issues</h1>
                    </div>
                    <div className="md:block">
                        <input className="p-2 border border-gray-300 rounded-md" type="text" placeholder="Search" onKeyUp={(e) => searchIssue(e.target.value)} />
                    </div>
                </div>
                <p className="mt-3 text-xl text-yellow-800 font-semibold">{topicName + ' (' + total + ')'}</p>
                <div className="mt-5 mb-20">
                    <ul className="text-lg ml-1">
                        {
                            isIssueLoading &&
                            <div className="flex items-center justify-center mt-[160px]">
                                <img src="https://img.icons8.com/fluent-systems-regular/100/000000/spinner.gif" alt="" />
                            </div>
                        }
                        {
                            !isIssueLoading && issues.length > 0 ?
                                issues.map((item, index) => (
                                    <Issue item={item} key={index} />
                                ))
                                : !isIssueLoading && <div className="text-2xl text-gray-400 ">No issues found</div>
                        }
                    </ul>

                    {
                        (!isIssueLoading && issues.length > 0) &&
                        <div className="flex justify-center md:justify-end space-x-1 mt-8">
                            <button className={prevPage ? "border-gray-800 font-bold p-2 underline underline-offset-4" : "p-2 text-gray-500 text-md"} disabled={!prevPage} onClick={() => setPageNo(pageNo - 1)}>Previous</button>
                            <span className='mt-2'> {pageNo} of {totalPage}</span>
                            <button className={nextPage ? "border-gray-700 font-bold p-2 underline underline-offset-4" : "p-2 rounded text-gray-600 text-md"} disabled={!nextPage} onClick={async () => setPageNo(pageNo + 1)}>Next</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;