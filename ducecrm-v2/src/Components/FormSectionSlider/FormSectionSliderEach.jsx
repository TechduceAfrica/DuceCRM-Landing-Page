import Image from 'next/image'
import React from 'react'

export default function FormSectionSlider({ img, alt, width, height }) {
    return (
        <div>
            <Image 
                src={img}
                alt={alt}
                title={alt}
                width={width}
                height={height}
            />
        </div>
    )
}
