import React, { useRef, useEffect, useState } from 'react';

const CounterComponent = () => {
    const counterRef = useRef(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('counterRef', counterRef.current);
    }, [count]);

    const incrementCounter = () => {
        counterRef.current += 1;
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Counter Value (state): {count}</p>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
};

export default CounterComponent;




