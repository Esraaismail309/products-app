import React from 'react'
import ReactStars from 'react-rating-stars-component'

export const Rating = ({ value }) => {
    return (
        <div>
            <ReactStars
                count={5}
                size={30}
                activeColor="#ffd700"
                value={value}
                isHalf={true}
                edit={false}
            />,
        </div>
    )
}
