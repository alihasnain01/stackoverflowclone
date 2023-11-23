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
        <div className="border border-gray-300 m-3 p-3 rounded-lg shadow-md" >
            <small className="text-xs text-blue-300 mx-1 font-semibold">({formatDate(props.issue.created_at)})</small>
            <div className="mt-2 ml-1" dangerouslySetInnerHTML={{ __html: props.issue.description }} />
        </div>
    )
}

export default Solution;
