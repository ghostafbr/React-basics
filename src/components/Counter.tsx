import {useState} from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleAdd = (value: number = 1): void => {
        setCounter(counter + value);
    };

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Value: { counter }</span>
            <br/>
            <button
                onClick={ () => handleAdd() }
                className="btn btn-outline-primary mt-2">
                +1
            </button>
            <button
                onClick={ () => handleAdd(2) }
                className="btn btn-outline-primary mt-2">
                +2
            </button>
            <button
                onClick={ () => setCounter(0) }
                className="btn btn-outline-danger mt-2">
                reset
            </button>
        </div>
    );
};
