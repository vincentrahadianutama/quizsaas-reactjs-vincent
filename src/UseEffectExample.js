import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Nilai state count telah berubah:', count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Jumlah klik: {count}</p>
      <button onClick={handleClick}>Klik saya!</button>
    </div>
  );
};

export default UseEffectExample;