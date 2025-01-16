import React, { useEffect, useState } from 'react';

import leftChevron from '../../Images/chevron-left.svg'
import rightChevron from '../../Images/chevron-right.svg'

const ImageSlider = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0)
    }, [images])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='image-slider'>
            <div className='product-img-container'>
                <button onClick={handlePrev} className='left-btn' ><img className='chevron' src={leftChevron} /></button>
                <img
                    className='product-img'
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    
                />
                <button onClick={handleNext} className='right-btn' ><img className='chevron' src={rightChevron} /></button>
            </div>

        </div>
    );
};

export default ImageSlider;
