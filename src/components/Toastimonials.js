import React, {useState, useEffect} from 'react';

function Toastimonials() {
  const [toastimonials, setToastimonials] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/toastimonials')
      .then(resp => resp.json())
      .then(data => setToastimonials(data))
  }, [])

  const listItems = toastimonials.map(item => <li key={item.id}>{item.toastimonial}</li>)

  return (
    <div className='toastimonials'>
      <h4>TOASTIMONIALS</h4>
      <ul className='toastimonials__list'>
        {listItems}
      </ul>
    </div>
  );
}

export default Toastimonials;