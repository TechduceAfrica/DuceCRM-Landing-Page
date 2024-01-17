'use client'
import React from 'react'
import BenefitsMobileCard from './BenefitsMobileCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


export default function MobileCards({ mobilebenefitsList }) {
    return (
        <div>
            <Swiper
                // modules={[Navigation, Pagination]}
                // navigation
                // pagination={{ clickable: true }}
                spaceBetween={20}
                loop={true}
                slidesPerView={2}
                // breakpoints={{
                //     768: {
                //     slidesPerView: 2,
                //     },
                // }}
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
