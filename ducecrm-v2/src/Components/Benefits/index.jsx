import { BenefitCopy, BenefitsCopy } from '@/WebCopy/BenefitsCopy'
import React from 'react'
import MapBenefits from './MapBenefits'
import MobileCards from './MobileCards'

export default function Benefits() {
    return (
        <section className="benefit__section container__width grid__j__items__cen">
            <div className='benefit__stick'>
                <h3>
                    {BenefitCopy.title}
                </h3>
                <p>
                    {BenefitCopy.description}
                </p>
            </div>
            <div className='benefit__scroll__card__wrapper'>
                <MapBenefits benefitsList={BenefitsCopy}/>
            </div>
            <div className='mobile__benefits'>
                <MobileCards mobilebenefitsList={BenefitsCopy}/>
            </div>
        </section>
    )
}
