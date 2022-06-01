import React, {useState, useEffect} from 'react';

function Toastimonials() {
  const [toastimonials, setToastimonials] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/toastimonials')
      .then(resp => resp.json())
      .then(data => setToastimonials(data))
  }, [])

  return (
    <div className='toastimonials'>

    </div>
  );
}

export default Toastimonials;