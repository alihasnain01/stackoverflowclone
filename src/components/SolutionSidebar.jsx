const SolutionSidebar = (props) => {
    return (
        <div className="w-1/3 hidden md:block  mt-9 border border-gray-300 rounded-2xl shadow-lg h-80 md:h-[350px]">
            <div className="mx-auto mt-8 flex flex-col items-center justify-center space-y-4">
                <img className="w-16 h-16 rounded-full mr-2" src="https://img.icons8.com/officexs/40/user.png" alt="user" />
                <h5 className="text-lg font-medium text-blue-500 underline">{props.issue ? props.issue.user.name : 'N/A'}</h5>
            </div>
            <div className="flex items-center justify-center">
                <hr className="border-gray-300 w-10 md:w-40 font-bold mt-5" />
            </div>
            <div className="mx-auto mt-6 m-4 space-x-3 md:space-x-10">
                <div className="flex flex-left m-5">
                    {/* <img width="24" height="30" src="https://img.icons8.com/officexs/30/user.png" alt="user" /> */}
                    {/* <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  {props.issue ? props.issue.user.name : null}</small> */}
                </div>
                <div className="flex sx:items-center sx:justify-center md:flex-left md:m-5">
                    <img width="24" height="48" src="https://img.icons8.com/officexs/30/user.png" alt="error--v1" />
                    <small className="text-sm text-blue-300 mx-1 font-bold ml-1.5 md:ml-3 mt-1">  1200</small>
                </div>
                <div className="flex sx:items-center sx:justify-center md:flex-left md:m-5">
                    <img width="26" height="48" src="https://img.icons8.com/color/48/error--v1.png" alt="error--v1" />
                    <small className="text-sm text-blue-300 mx-1 font-bold ml-1.5 md:ml mt-1">  1200</small>
                </div>
                <div className="flex sx:items-center sx:justify-center md:flex-left md:m-5">
                    <img width="26" height="48" src="https://img.icons8.com/color/48/sparkling.png" alt="sparkling" />
                    <small className="text-sm text-blue-300 mx-1 font-boldml-1.5 md:ml mt-1">  Starts </small>
                </div>
            </div>
        </div>
    )
}

export default SolutionSidebar;