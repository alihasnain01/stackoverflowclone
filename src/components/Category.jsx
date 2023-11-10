import { useEffect } from "react";
import { base_url } from "../utils/constants";
import { useState } from "react";
import axios from "axios";
import CategoryDetail from "./CategoryDetail";

const Cetegory = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        document.title = 'Categories';
        fetchTopics();
    }, [])

    const fetchTopics = async () => {
        await axios.get(base_url + 'categories')
            .then(res => {
                setTopics(res?.data?.data?.data);
                console.log(topics);
            }).catch(err => console.log(err));
    }

    const searchCategory = (val) => {
        console.log(val);
    }

    return (
        <div className="max-w-6xl :md:max-w-4xl mx-auto mt-10 mb-5">
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
            </div>
        </div>
    )
}

export default Cetegory;