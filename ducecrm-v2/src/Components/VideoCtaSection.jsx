'use client'
import { VideoCTACopy } from '@/WebCopy/VideoCTACopy'
import Image from 'next/image'
import React from 'react'
import VideoPopUp from './Popups/VideoPopUp'

export default function VideoCtaSection() {

    const handleOpenPopup = () => {
        const popUpOpener = document.querySelector('.video__popup');
        if (popUpOpener) {
            popUpOpener.classList.toggle('open');
        }
    };

    return (
        <section className='video__cta__section container__width'>
            <div>
                <h3>
                    Intuitive <span className='org'> CRM </span>To Boost Conversion
                </h3>
                <p>
                    With intuitive features, making Duce<span className='org'>CRM </span> superior to many similar competitors. Watch our story unfold.
                </p>
                <div onClick={handleOpenPopup}>
                    <svg xmlns="https://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                        <path d="M30 0.812744C24.0666 0.812744 18.2664 2.57221 13.3329 5.86865C8.39943 9.1651 4.55426 13.8505 2.28363 19.3322C0.0129985 24.814 -0.581101 30.846 0.576455 36.6654C1.73401 42.4849 4.59123 47.8304 8.78681 52.0259C12.9824 56.2215 18.3279 59.0787 24.1473 60.2363C29.9667 61.3938 35.9987 60.7997 41.4805 58.5291C46.9623 56.2585 51.6476 52.4133 54.9441 47.4798C58.2405 42.5464 60 36.7462 60 30.8127C60 26.8731 59.224 22.972 57.7164 19.3322C56.2088 15.6925 53.999 12.3853 51.2132 9.59954C48.4274 6.81378 45.1203 4.604 41.4805 3.09636C37.8407 1.58872 33.9397 0.812744 30 0.812744ZM24 44.3127V17.3127L42 30.8127L24 44.3127Z" fill="#FF6400"/>
                    </svg>
                </div>
                <div>
                    <VideoPopUp/>
                </div>
            </div>
            <div>
                <Image
                    src={VideoCTACopy.img}
                    alt={VideoCTACopy.title}
                    title={VideoCTACopy.title}
                    width={VideoCTACopy.width}
                    height={VideoCTACopy.height}
                />
            </div>
        </section>
    )
}
