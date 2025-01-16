import React, { useEffect, useState } from 'react';

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handlePrev} style={{ marginRight: '10px' }}>⬅</button>
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
            <button onClick={handleNext} style={{ marginLeft: '10px' }}>➡</button>
        </div>
    );
};

export default ImageSlider;
