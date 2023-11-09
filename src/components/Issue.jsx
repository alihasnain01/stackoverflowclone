const Issue = (props) => {
    return (
        <div className="mb-2 p-3 border border-gray-50" >
            <h3 className="text-xl text-gray-600 font-semibold" >{props.item.title}</h3>
            <p className="text-gray-500 text-lg mt-2">{ props.item.description}</p>
        </div>
    )
}

export default Issue;