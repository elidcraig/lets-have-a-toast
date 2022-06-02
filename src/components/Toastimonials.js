import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Toastimonials.css'

function Toastimonials() {
  const [toastimonials, setToastimonials] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/toastimonials')
      .then(resp => resp.json())
      .then(data => setToastimonials(data))
  }, [])

  const listItems = toastimonials.map(item => 
    <Item className='toastimonials__card' key={item.id} text={item.toastimonial}/>)

  return (
    <motion.div className='toastimonials' whileHover={{ scale: 1.02 }}>
      <h1>TOASTIMONIALS</h1>
      <Carousel className='toastimonials__list' navButtonsWrapperProps={{style: {
            bottom: 'unset',
            top: '10'
        }}}>
        {listItems}
      </Carousel>
    </motion.div>
  );
}

function Item({text}) {
  return (
    <Paper>
      <h3 className='item__text'>{text}</h3>
    </Paper>
  )
}

export default Toastimonials;