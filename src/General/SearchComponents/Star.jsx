import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars = 5, rating, setRating }) => {
    const [hover, setHover] = useState(1);

    return (
        <div className='flex'>
            {/* here we are creating array from array class or say Object and re */}
            {[...Array(totalStars)].map((star, index) => {

                // this used as to tell that star number if i click on start 4 its index is 3 therefore adding 1
                const ratingValue = index + 1;

                return (
                    <FaStar
                        key={index}
                        size={30}
                        className="star"
                        color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(rating)}
                        style={{
                            cursor: 'pointer',
                            transition: 'color 200ms',
                        }}
                    />
                );
            })}

        </div>
    );
};

export default StarRating;