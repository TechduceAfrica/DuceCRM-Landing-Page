import React from 'react'
import BenefitsList from './BenefitsList'

export default function MapBenefits({ benefitsList }) {
    return (
        <>
            {Array.isArray(benefitsList) &&
                benefitsList.map((benefit, index) => (
                    <BenefitsList 
                        key={index} 
                        {...benefit}
                    />
            ))}
        </>
    )
}
