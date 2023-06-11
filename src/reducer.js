const reducer = (state, action) => {

    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: action.payload.data,
            };
        default: {

        }
    }

    return state;

}
export default reducer;