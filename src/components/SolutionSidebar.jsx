const SolutionSidebar = (props) => {
    return (
        <div className="w-1/4 mt-9 border rounded">
        <h5 className="m-5 text-xl font-medium">User Info</h5>
        <div className="flex flex-left m-5">
            <img width="26" height="30" src="https://img.icons8.com/officexs/30/user.png" alt="user"/>
            <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  {props.issue? props.issue.user.name:null}</small>
        </div>
        <div className="flex flex-left m-5">
            <img width="26" height="48" src="https://img.icons8.com/color/48/error--v1.png" alt="error--v1"/>
            <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  1200</small>
        </div>
        <div className="flex flex-left m-5">
            <img width="26" height="48" src="https://img.icons8.com/color/48/sparkling.png" alt="sparkling"/>
            <small className="text-sm text-blue-300 mx-1 font-bold ml-3 mt-1">  Starts </small>
        </div>
    </div>
    )
}

export default SolutionSidebar;