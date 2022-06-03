import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import Carousel from 'react-material-ui-carousel'
import './Toastimonials.css'

function Toastimonials() {
  const [toastimonials, setToastimonials] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/toastimonials')
      .then(resp => resp.json())
      .then(data => setToastimonials(data))
  }, [])

  const listItems = toastimonials.map(item => 
    <h3 className='toastimonials__card' key={item.id}>"{item.toastimonial}"</h3>)

  return (
    <motion.div className='toastimonials' whileHover={{ scale: 1.02 }}>
      <h1>TOASTIMONIALS</h1>
      <Carousel className='toastimonials__list' indicators={false} interval={2500} navButtonsAlwaysInvisible={true} height={'75px'}>
        {listItems}
      </Carousel>
    </motion.div>
  );
}

export default Toastimonials;