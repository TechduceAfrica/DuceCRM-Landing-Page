import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Benefits from './Benefits'

export default function Mainpage() {
    return (
        <>
            <NavBar/>
            <main className='grid__j__items__cen'>
                <HeroSection/>
                <FeatureSection/>
                <Benefits/>
            </main>
        </>
    )
}
