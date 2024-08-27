import React, { useState } from 'react';

export default function StateDemo() {
    // Declare a state variable named 'count' with an initial value of 0
    const [count, setCount] = useState(0);
    // let count = 0;
    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }
  
    return (
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>count:{count}</h1>
        <input 
            type="button" 
            value="okay" 
            onClick={handleClick}
            // eslint-disable-next-line react/no-unknown-property
            style={{
                width: '200px', // Increase the width
                height: '50px',  // Increase the height
                padding: '10px', // Add padding for better spacing
                fontSize: '20px' // Increase the font size
              }} />
      </div>
    );
  }
  