import { FormSectionCopy } from '@/WebCopy/FormSectionCopy'
import React from 'react'
import Form from './Form'
import FormSectionSlider from './FormSectionSlider'

export default function FormSection() {
    return (
        <section className='form__section__wrapper'>
            <div className='form__section container__width'>
                <div>
                    <h3>
                        Excited To Get Your Business That <span className='org'> CRM </span>That It Needs?
                    </h3>
                    <p>
                        {FormSectionCopy.description}
                    </p>
                    <div>
                        <Form/> 
                    </div>
                </div>
                <div>
                    <FormSectionSlider/>
                </div>
            </div>
            
        </section>
    )
}
