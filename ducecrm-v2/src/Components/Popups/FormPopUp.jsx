'use client'
import Form from '../Form'
import { handleClosePopUp } from '.'

export default function FormPopUp() {
    return (
        <div className='popup__wrapper form__popup'>
            <div className="close__btn" onClick={handleClosePopUp}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16"
                >
                    <path 
                        fill="currentColor" 
                        fillRule="evenodd" 
                        d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z" 
                        clipRule="evenodd"
                    >
                    </path>
                </svg>
            </div>
            <Form/>
        </div>
    )
}
