import { BenefitCopy, BenefitsCopy } from '@/WebCopy/BenefitsCopy'
import React from 'react'
import MapBenefits from './MapBenefits'

export default function Benefits() {
    return (
        <div className="benefit__section container__width grid__j__items__cen">
            <div className='benefit__stick'>
                <h3>
                    {BenefitCopy.title}
                </h3>
                <p>
                    {BenefitCopy.description}
                </p>
            </div>
            <div>
                <MapBenefits benefitsList={BenefitsCopy}/>
            </div>
        </div>
    )
}
