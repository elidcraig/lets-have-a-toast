import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import './Toastimonials.css'

function Toastimonials() {
  const [toastimonials, setToastimonials] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/toastimonials')
      .then(resp => resp.json())
      .then(data => setToastimonials(data))
  }, [])

  const listItems = toastimonials.map(item => 
    <div className='toastimonials__card' key={item.id}>"{item.toastimonial}"</div>)

  return (
    <motion.div className='toastimonials' whileHover={{ scale: 1.02 }}>
      <h1>TOASTIMONIALS</h1>
      <div className='toastimonials__list'>
        {listItems}
      </div>
    </motion.div>
  );
}

export default Toastimonials;