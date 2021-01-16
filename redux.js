const redux = require('redux');
const createStore = redux.createStore;

let initialState = {
    value: 0,
    age: 17
}

// Reduce
const rootReduce = (state=initialState, action) => {
    console.log('heh!!', state);
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }

        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
    
        default:
            break;
    }
    return state;
}

// Store
const store = createStore(rootReduce);
console.log(store.getState());


// Action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 2});
store.dispatch({type: 'CHANGE_VALUE', newValue: 5});

// Subscription
store.subscribe(() => console.log('subrek:', store.getState()));
store.dispatch({type: 'ADD_AGE'});


console.log(store.getState());