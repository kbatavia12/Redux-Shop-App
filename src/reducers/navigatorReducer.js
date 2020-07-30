const navigatorReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PAGE_TYPE":
            return {...state, domain: action.payload.domain, subdomain: action.payload.subdomain};
        default:
            return state;
    }
}

export default navigatorReducer;