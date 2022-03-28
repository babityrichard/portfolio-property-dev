import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { images } from '../../data/images';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Carousel = () => {
    const scrollRef = useRef(null);

    const scroll = direction => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 616;
        } else {
            current.scrollLeft += 616;
        }
    }

    return (
        <div className="carousel-container">
            <h2>Gallery</h2>
            <div className="carousel-images">
                <div className="images-container" ref={scrollRef}>
                    {images.map((image, index) => (
                        <div className="img-card" key={`carousel-img-${index + 1}`}>
                            <Image                                 
                                src={image}
                                alt={image}
                                width={600}
                                height={400}
                                className="carousel-img"
                            />
                        </div>
                        
                    ))}
                </div>

                <div className="carousel-arrows">
                    <BsArrowLeftCircle 
                        onClick={() => scroll('left')} 
                        className="carousel-icon"
                    />
                    <BsArrowRightCircle 
                        onClick={() => scroll('right')} 
                        className="carousel-icon"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Carousel;
