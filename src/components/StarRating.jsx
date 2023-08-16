import React from 'react'

import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({ totalStars = 5 }) {
    
    const [selected, setSelected] = useState(true)
    
    const getColor = () => {
        if (selected){
            return 'red'
        }
        else {
            return 'grey'
        }
    }
    
    
    const changeColor = () => {
        setSelected(!selected)
    }

    const Star = () => {
        console.log('Start render was called')
        return (<FaStar color={getColor()} onClick={changeColor}></FaStar>)

    }

    const createArray = length => [...Array(length)]

  return (
    <>
   { createArray(totalStars).map((n, i) => <Star key={i} />)}
    {}
    </>
  )
}

export default StarRating