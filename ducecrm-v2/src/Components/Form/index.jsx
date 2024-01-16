"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import style from '@/Components/PriBtn.module.css'

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);}
    // console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullName">
                Full Name
            </label>
            <input 
                type="text" 
                name='fullName'
                placeholder="Example (John Doe)" 
                {...register("fullName", {required: true, maxLength: 80})} 
            />
            {errors?.fullName && <span className='org'>Name can not be empty</span>}

            <label htmlFor="email">
                Email
            </label>
            <input 
                type="email" 
                name='email'
                placeholder="Example (sample@mail.com)" 
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})} 
            />
            {errors?.email && <span className='org'>Email can not be empty</span>}
            <button type="submit" className={style.pri__btn}>
                Join Our Waitlist
            </button>
        </form>
    )
}
