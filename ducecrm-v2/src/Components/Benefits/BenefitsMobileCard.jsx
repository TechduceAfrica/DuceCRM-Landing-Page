import Image from 'next/image'

export default function BenefitsMobileCard({ title, description, img }) {
    return (
        <div className='mobile__benefit__card'>
            <div className='mobile__benefit__card__image__wrapper'>
                <Image
                    src={img}
                    alt={title}
                    title={title}
                    width={190}
                    height={155}
                />
            </div>
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
        </div>
    )
}
