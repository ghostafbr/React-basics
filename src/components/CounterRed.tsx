import {useReducer} from "react";

const initialState = {
    counter: 10
}

type ActionType = { type: 'increment'} | { type: 'decrement'} | { type: 'custom', payload: number};

const counterReducer = ( state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter++
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter--
            }
        case 'custom':
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state;

    }
}

export const CounterRed = () => {

    const [{counter}, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <h2>Counter: { counter }</h2>
            <button
                onClick={() => dispatch({ type: 'increment'})}
                className="btn btn-outline-primary">
                +1
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement'})}
                className="btn btn-outline-warning">
                -1
            </button>
            <button
                onClick={() => dispatch({ type: 'custom', payload: 10})}
                className="btn btn-outline-info">
                Set it 10
            </button>
        </>
    );
};
