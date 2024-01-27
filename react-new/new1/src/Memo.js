import React, { useState, useMemo } from 'react';

export default function Memo({ data }) {
  const expenseCalculation = (data) => {
    console.log('performing calculation');
    return data.toUpperCase();
  };

  const [inputData, setinputData] = useState('');

  const memoResult = useMemo(() => expenseCalculation(inputData), [inputData]);

  return (
    <div>
      <p>Original data: {inputData}</p>
      <p>memoResult: {memoResult}</p>
      <button type='input' onClick={() => setinputData('hi how are you')}>
        Input
      </button>
    </div>
  );
}
