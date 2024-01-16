import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Benefits from './Benefits'
import VideoCtaSection from './VideoCtaSection'
import FormSection from './FormSection'
import FaqSection from './FaqSection'

export default function Mainpage() {
    return (
        <>
            <NavBar/>
            <main className='main__sec grid__j__items__cen'>
                <HeroSection/>
                <FeatureSection/>
                <Benefits/>
                <VideoCtaSection/>
                <FormSection/>
                <FaqSection/>
            </main>
        </>
    )
}
