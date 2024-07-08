import React, {useEffect, useRef, useState} from 'react';

type TimerArgs = {
    milliseconds: number,
}

export const Timer = ( { milliseconds }: TimerArgs ) => {

    const [seconds, setSeconds] = useState(0);
    const ref: React.MutableRefObject<any> = useRef<NodeJS.Timeout>();

    useEffect( () => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval( () => setSeconds((s: number) => s + 1), milliseconds);
    }, [milliseconds])

    return (
        <>
            <h4>Timer: <small>{seconds}</small></h4>
        </>
    );
};
