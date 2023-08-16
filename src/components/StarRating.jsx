import React from 'react'

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating({ totalStars = 5 }) {

    const [selectedStars, setSelectedStars] = useState(3)

    // onSelect is just going to default to a function that returns its input
    const Star = ({ selected = false, onSelect = f => f }) => {
        return (<FaStar color={selected ? "red" : "grey"} onClick={onSelect}></FaStar>)
    }

    const createArray = length => [...Array(length)]

    return (
        <>
            {
            createArray(totalStars).map((n, i) => <Star key={i} onSelect={() => {
                setSelectedStars(i + 1)
            }} 
            selected={selectedStars > i} starId={i} />)}
        <p> {selectedStars} of {totalStars} stars </p>
        </>
    )
}

export default StarRating