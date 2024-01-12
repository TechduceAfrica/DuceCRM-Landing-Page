import React from 'react'

export default function BenefitsList({ title, description, img }) {

    const backgroundStyle = {
        backgroundImage: `url(${img})`,
    };

    return (
        <div style={backgroundStyle} className='benefit__card'>
            <div className='benefit__card__content'>
                <h4>
                    {title}
                </h4>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
