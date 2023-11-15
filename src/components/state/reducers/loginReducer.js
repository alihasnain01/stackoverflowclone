const reducer = (state = 0, action) => {
    if (action.type === "LOGIN") {
        return state + action.payload
    } else if (action.type === 'LOGOUT') {
        return state - action.payload
    } else {
        return state
    }
}

export default reducer;