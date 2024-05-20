import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

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

export default ClickCounter;