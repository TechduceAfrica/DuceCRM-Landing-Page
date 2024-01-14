'use client'
import React, { useRef, useState }  from 'react'
import BenefitsMobileCard from './BenefitsMobileCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

export default function MobileCards({ mobilebenefitsList }) {
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                
                navigation={true}
                modules={[Navigation]}
            >
                {Array.isArray(mobilebenefitsList) &&
                    mobilebenefitsList.map((mobilebenefit, index) => (
                        <SwiperSlide key={index}>
                            <BenefitsMobileCard
                                {...mobilebenefit}
                            />
                        </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
