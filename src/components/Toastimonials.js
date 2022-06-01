import React, {useState, useEffect} from 'react';
import './Toastimonials.css'

function Toastimonials() {
  const [toastimonials, setToastimonials] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/toastimonials')
      .then(resp => resp.json())
      .then(data => setToastimonials(data))
  }, [])

  const listItems = toastimonials.map(item => 
    <div className='toastimonials__card' key={item.id}>"{item.toastimonial}"</div>)

  //would love to implement bootstrap carousel if possible
  return (
    <div className='toastimonials'>
      <h4>TOASTIMONIALS</h4>
      <div className='toastimonials__list'>
        {listItems}
      </div>
    </div>
    
  );
}

export default Toastimonials;