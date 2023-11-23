import { Link } from "react-router-dom";

const CategoryDetail = (props) => {
    return (
        props ?
            <div>
                <li className="col-span-1 bg-white rounded-lg shadow divide-y border border-gray-250 divide-gray-400">
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="min-w-0 flex-1 h-30">

                            {/* <a href="#" className="cursor-pointer"> */}
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <Link to={`/categories/issues/${props.topic.id}`} className="text-blue-500 text-sm font-medium ">{props.topic.name}</Link>
                            <div className="flex space-x-2">
                                <small className="mt-1.5 text-gray-600 mb-2 font-medium">Total: {props.topic.total_issues}</small>
                                <small className="mt-1.5 text-gray-600 mb-2 font-medium">Today: {props.topic.today_issues}</small>
                            </div>
                            <p className="text-gray-500 text-sm max-w-readable">{props.topic.description}</p>
                            {/* </a> */}
                        </div>
                    </div>
                </li>
            </div>
            : null
    )
}

export default CategoryDetail;