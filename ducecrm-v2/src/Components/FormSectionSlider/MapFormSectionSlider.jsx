'use client'
import React from 'react'
import FormSectionSlider from './FormSectionSliderEach'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function MapFormSectionSlider({ formslide }) {
    return (
        <div className='form__sec__slider__wrapper'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
            >
                {Array.isArray(formslide) &&
                    formslide.map((images, index) => (
                        <SwiperSlide key={index}>
                            <FormSectionSlider 
                               {...images}
                            />
                        </SwiperSlide>
                ))}
            </Swiper>       
        </div>
    )
}
