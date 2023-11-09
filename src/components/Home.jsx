import { useEffect, useState } from "react";
import axios from "axios";
import Issue from "./Issue";
import { base_url } from "../utils/constants";

const Home = () => {

    const [pageNo, setPageNo] = useState(1);
    const [totalPage, setTotalPage] = useState('');
    const [topicId, setTopicId]= useState('');
    const [topics, setTopics] = useState([]);
    const [issues, setIssues] = useState([]);
    const [topicName, setTopicName] = useState('Latest Issues');
    const [search, setSearch] = useState('');
    const [nextPage,setNextPage]=useState(true);
    const [prevPage, setPrevPage] = useState(true);

    useEffect(() => {
        document.title='Home';
        fetchTopics();
        fetchIssues();
    }, []);

    const fetchTopics = async () => {
        await axios.get(base_url+'topics')
            .then(res => {
                setTopics(res?.data.data);; 
        }).catch(err => console.log(err));
        
    }

    const fetchIssues = async (id = '', name = 'Latest Issues', search = '') => {
        // id ? setSearch('') : setSearch(search);
        // id ? setPageNo('') : setPageNo(pageNo);
        // id ? setTopicId(id) : ( setTopicId? setTopicId(topicId): setTopicId(''));
        // setTopicId? (id ? setTopicId(id) : setTopicId('')) : setTopicId(''); 
        // console.log(pageNo);
        await axios.get(base_url+"issues?" + (id ? `?id=${id}` : '') + (search ? `&search=${search}` : "" ) + (pageNo >`` ? `&page=${pageNo}` : "" )).then(res => {
            console.log(res);           
            res?.data?.data?.prev_page_url ? setPrevPage(true) : setPrevPage(false);
            res?.data?.data?.next_page_url ? setNextPage(true) : setNextPage(false);
            // res?.data?.data?.current_page ? setPageNo(res?.data?.data?.current_page) : setPageNo('');
            res?.data?.data?.last_page ? setTotalPage(res?.data?.data?.last_page) : setTotalPage('');
            setIssues(res?.data?.data?.data);
        }).catch(err => console.log(err));

         setTopicName(name??'Latest Issues')
    }

    const searchIssue = (search) => {
        let name=search ?search:'Latest Issues';
        fetchIssues('', name, search);
    }
    
    
    const incrementPage= ()=>{
        let page=pageNo;
        page = page + 1;
        console.log('page ' + page);
        setPageNo(page)
        console.log(pageNo);
        fetchIssues('',topicName,'');
    }

    const decrementPage=()=>{
        // let page=pageNo;
        // page = page - 1;
        setPageNo(pageNo -1)
        fetchIssues('',topicName,'');
    }

    return (
        <div className="w-full flex justify-between mt-20 md:px-40">
            <div className="w-1/4 ">
                <h1 className="text-2xl w-11 font-bold">Categories</h1>
                <div className="mt-10 ">
                    <ul className="text-lg ml-5">
                        {
                            topics.length > 0 ?
                            topics.map((item, index) => (
                                <li className="cursor-pointer text-gray-500" value={search} onClick={() => fetchIssues(item.id, item.name)} key={index}>{item.name}</li>
                            ))       
                            : <p className=" text-gray-400 ">No topics found</p>
                         }
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Issues</h1>
                    </div>
                    <div>
                        <input className="p-2 border border-gray-400" type="text" placeholder="Search" onKeyUp={(e)=>searchIssue(e.target.value)}/>
                    </div>
                </div>
                <p className="mt-3 text-xl text-yellow-800 font-semibold">{topicName}</p>
                <div className="mt-5 mb-20">
                    <ul className="text-lg ml-1">
                        {
                            issues.length > 0 ?
                                issues.map((item, index) => (
                                <Issue item={item} key={index}/>
                            ))
                            : <div className="text-2xl text-gray-400 ">No issues found</div>
                        }
                    </ul>

                    {
                        issues.length > 0 ?
                         <div className="flex justify-center space-x-2 mt-5">
                            <button className={ prevPage ? "border-gray-800 font-bold p-2 rounded border-solid border-2" : "p-2 rounded border-gray-400  border-solid border-2"} disabled={!prevPage}  onClick={()=>decrementPage()}>Previous</button>
                                <span className='mt-2'> {pageNo} of { totalPage }</span>
                            <button className={ nextPage ? "border-gray-700 font-bold p-2 rounded border-solid border-2 " : "p-2 rounded border-gray-400  border-solid border-2 ml-2"} disabled={!nextPage} onClick={()=>incrementPage()}>Next</button>
                        </div> :"" 
                    }
                </div>
            </div>
        </div>  
    )
}

export default Home;