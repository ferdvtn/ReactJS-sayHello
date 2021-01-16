import ActionType from "./rootActionType"

let globalState = {
    totalOrder: 0
}

// reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.PLUS_ONE:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }

        case ActionType.MINUS_ONE:
            if (state.totalOrder > 0) {
                return {
                    ...state,
                    totalOrder: state.totalOrder - 1
                }
            }
            return state;

        default:
            return state
    }
}

export default rootReducer;