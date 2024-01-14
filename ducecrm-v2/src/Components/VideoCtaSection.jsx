import { VideoCTACopy } from '@/WebCopy/VideoCTACopy'
import Image from 'next/image'
import React from 'react'

export default function VideoCtaSection() {
    return (
        <section className='video__cta__section container__width'>
            <div>
                <h3>
                    Intuitive <span className='org'> CRM </span>To Boost Conversion
                </h3>
                <p>
                    With intuitive features, making Duce<span className='org'>CRM </span> superior to many similar competitors. Watch our story unfold.
                </p>
                <div>

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
