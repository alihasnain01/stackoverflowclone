import { Link } from "react-router-dom";

const Issue = (props) => {
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

    const formattedCreatedAt = formatDate(props.item.created_at);

    return (
        <div className="mb-4 p-3 border border-gray-200 rounded-lg shadow space-x-2" >
            <Link to={`/issues/${props.item.id}`}><h3 className="text-md text-gray-600 font-semibold underline underline-offset-2" >{props.item.title}</h3></Link>
            <div className="flex flex-left mt-2 space-x-2 md:space-x-4">
                <div className="flex flex-left space-x-2">
                    <img width="19" height="16" className="text-red-900" src="https://img.icons8.com/windows/32/user.png" alt="user" />
                    <small className="text-sm text-blue-300 mx-1 font-normal">  {props.item.user.name}</small>
                </div>
                <div className="flex flex-left ml-2 space-x-2">
                    <img width="19" height="18" src="https://img.icons8.com/material-outlined/24/clock--v1.png" alt="clock--v1" />
                    <small className="text-xs text-blue-300 font-normal">  {formattedCreatedAt}</small>
                </div>
            </div>
            <p className="text-gray-400 text-sm font-semibold mt-2">{props.item.description}</p>
        </div>
    )
}

export default Issue;