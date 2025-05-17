import React from 'react'
import { FaStar } from 'react-icons/fa6';


function Comment({ review }) {
    const totalStars = review.rating
    return (
        <div className='bg-gray-200 rounded-2xl p-2 my-3'>

            {/* Static stars */}

            <div className='flex'>
                {/* here we are creating array from array class or say Object and re */}
                {[...Array(totalStars)].map((star, index) => {

                    return (
                        <FaStar
                            key={index}
                            size={30}
                            className="star"
                            color={'#ffc107'}
                            style={{
                                cursor: 'pointer',
                                transition: 'color 200ms',
                            }}
                        />
                    );
                })}

            </div>

            {/* Comment text Amazing Loving it  */}
            <p>
                {review.review_text}
            </p>
        </div>
    )
}

export default Comment