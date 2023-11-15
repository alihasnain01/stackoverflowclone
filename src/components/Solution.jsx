const Solution = (props) => {
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

    return (
        <div className="border border-gray-300 m-3 p-3 rounded-md" >
            <p className=" text-gray-800 font-medium">
                {props.issue.description} <small className="text-xs text-blue-300 mx-1 font-semibold">({formatDate(props.issue.created_at)})</small>
            </p>
        </div>
    )
}

export default Solution;
