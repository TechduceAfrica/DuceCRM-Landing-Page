import React from 'react'
import { FaqCopy } from '@/WebCopy/FAQCopy'

export default function FaqAccordion() {
    return (
        <div>
            {FaqCopy.map((faqsCopy, index) =>
                (
                    <details 
                        name="accordion" 
                        key={index}
                    >
                        <summary>
                            {faqsCopy.question}
                        </summary>
                        <p>
                            {faqsCopy.answer}
                        </p>
                    </details>
                )
            )}
        </div>
    )
}
