import React from 'react'
import FaqAccordion from './FaqAccordion'

export default function FaqSection() {
    return (
        <section className='container__width'>
            <h3>
                Frequently Asked Questions
            </h3>
            <div>
                <FaqAccordion/>
            </div>
        </section>
    )
}
