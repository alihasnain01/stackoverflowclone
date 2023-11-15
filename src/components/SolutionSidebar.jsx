const SolutionSidebar = (props) => {
    return (
        <div className="w-1/2 sm:w-1/3 mt-9 border border-gray-300 rounded-lg shadow-md h-80 md:h-[350px]">
            <div className="mx-auto flex items-center justify-center mt-8">
                <h5 className="text-xl font-medium">User Info</h5>
            </div>
            <div className="mx-auto mt-10 m-4 space-x-3 md:space-x-10">
                <div className="flex flex-left m-5">
                    {/* <img width="24" height="30" src="https://img.icons8.com/officexs/30/user.png" alt="user" /> */}
                    {/* <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  {props.issue ? props.issue.user.name : null}</small> */}
                </div>
                <div className="flex flex-left m-5">
                    <img width="24" height="48" src="https://img.icons8.com/officexs/30/user.png" alt="error--v1" />
                    <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  1200</small>
                </div>
                <div className="flex flex-left m-5">
                    <img width="26" height="48" src="https://img.icons8.com/color/48/error--v1.png" alt="error--v1" />
                    <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  1200</small>
                </div>
                <div className="flex flex-left m-5">
                    <img width="26" height="48" src="https://img.icons8.com/color/48/sparkling.png" alt="sparkling" />
                    <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  Starts </small>
                </div>

            </div>
        </div>
    )
}

export default SolutionSidebar;