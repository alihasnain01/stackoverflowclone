import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/constants";
import Solution from "./Solution";
import SolutionSidebar from "./SolutionSidebar";
import NoRecords from "./NoRecords";
import Loader from "./Loader";

const IssueDetail = () => {

    const { id } = useParams();
    const [issue, setIssue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
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

    useEffect( () => {
        fetchIssue();
    },[] )
    
    const fetchIssue = async () => {
        console.log('here');
        setIsLoading(true);
        await axios.get(base_url + `issues/${id}`).then(res => {
            setIssue(res?.data?.data);
            console.log(res.data.data);
            setIsLoading(false);
        }).catch(err => console.log(err));
    }
    
    return (
        <div className=" flex justify-between">

            {
                isLoading &&  <Loader />
            }

            {
               !isLoading && issue ? <SolutionSidebar issue={issue} /> : null
            }                 

            {
                issue ? 
                <div className="w-full mt-12 m-10">
                    <h1 className="text-xl text-gray-800 font-medium">
                        {issue.title} <small className="text-sm text-blue-300 mx-1 font-semibold">({ formatDate(issue.created_at)})</small>
                    </h1>
                        <p className="text-gray-500 mt-8">{issue.description}</p>
                        <div className="w-full mt-8">
                            <h3 className="text-xl text-gray-600 font-medium">Solutions</h3>
                            {
                                issue.solutions.length > 0 ?
                                    issue.solutions.map((item, index) => (
                                       <Solution key={index} issue={item} />
                                     ))
                                : <p className="text-gray-500 mt-8">No solution yet</p>        
                            }
                        </div>
              </div>
                : null
           } 
        </div>
    ) 
}

export default IssueDetail;