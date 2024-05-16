"use client"
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

interface CarouselProps {
    src: string;
    alt: string;
}

const CarouselComponent: React.FC<CarouselProps> = ({ src, alt }) => {
    return (
        <Carousel autoplayDelay={1000} autoplay={true} transition={{ type: "tween", duration: 2 }} className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Image
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}

export default CarouselComponent;
