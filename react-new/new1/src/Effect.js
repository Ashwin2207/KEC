import React, { useEffect, useState } from 'react';

export default function Effect() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error('Error fetching data:', error));
        
        return () => {
           
        };
    }, []); 
    return (
        <div>
            {data ? (
                <p>Data:{JSON.stringify(data)}</p>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
}