import { useEffect } from "react";
import { base_url } from "../utils/constants";
import { useState } from "react";
import axios from "axios";
import CategoryDetail from "./CategoryDetail";

const Cetegory = () => {
    const [pageNo, setPageNo] = useState(1);
    const [totalPage, setTotalPage] = useState('');
    const [nextPage, setNextPage] = useState(true);
    const [prevPage, setPrevPage] = useState(true);
    const [topics, setTopics] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        document.title = 'Categories';
        fetchTopics();
    }, [pageNo, search])

    const fetchTopics = async () => {
        await axios.get(base_url + 'categories' + `?page=${pageNo}` + (search ? `&search=${search}` : ""))
            .then(res => {
                res?.data?.data?.prev_page_url ? setPrevPage(true) : setPrevPage(false);
                res?.data?.data?.next_page_url ? setNextPage(true) : setNextPage(false);
                res?.data?.data?.last_page ? setTotalPage(res?.data?.data?.last_page) : setTotalPage('');
                setTopics(res?.data?.data?.data);
            }).catch(err => console.log(err));
    }

    const searchCategory = (val) => {

        setTimeout(() => {
            setPageNo(1);
            setSearch(val);
        }, 300);
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-900">Category</h1>
            <p className="mt-1 text-gray-500 font-normal w-2/3">A Category is key that categorizes your issue with other, similar issues. Using the right category keyword makes it easier for others to find and answer your issue</p>

            <div className="mt-8">
                <div className="ml-1 mb-5 flex justify-end">
                    <input type="text" className="p-1.5 border border-gray-400 rounded-md focus:border-gray-600" placeholder="search category" onKeyUp={(e) => searchCategory(e.target.value)} />
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        topics.length > 0 ?
                            topics.map((topic) => (
                                <CategoryDetail key={topic.id} topic={topic} />
                            )) : null
                    }
                </ul>

                {
                    topics.length > 0 &&
                    <div className="flex justify-end space-x-2 mt-9">
                        <button className={prevPage ? "border-gray-800 font-bold p-2 rounded-lg border-solid border-2 sm" : "p-2 rounded-lg border-gray-400  border-solid border-2 sm"} disabled={!prevPage} onClick={() => setPageNo(pageNo - 1)}>Previous</button>
                        <span className='mt-2'> {pageNo} of {totalPage}</span>
                        <button className={nextPage ? "border-gray-700 font-bold p-2 rounded-lg border-solid border-2 text-sm" : "p-2 rounded-lg border-gray-400  border-solid border-2 ml-2 sm"} disabled={!nextPage} onClick={async () => setPageNo(pageNo + 1)}>Next</button>
                    </div>
                }

            </div>
        </>
    )
}

export default Cetegory;