import React from 'react'
import BenefitsList from './BenefitsList'

export default function MapBenefits({ benefitsList }) {
    return (
        <div className='benefits__cards__wrapper'>
            {Array.isArray(benefitsList) &&
                benefitsList.map((benefit, index) => (
                    <BenefitsList 
                        key={index} 
                        {...benefit}
                    />
            ))}
        </div>
    )
}
