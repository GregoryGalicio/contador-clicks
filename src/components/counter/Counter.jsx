import React from 'react';
import "./Counter.css";

function Counter ({clicksNumber}) {
    return (
        <div className='counter'>
           {clicksNumber} 
        </div>
    );
};

export default Counter;