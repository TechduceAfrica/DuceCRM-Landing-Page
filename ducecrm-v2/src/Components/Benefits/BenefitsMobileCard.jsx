import Image from 'next/image'

export default function BenefitsMobileCard({ title, description, img }) {
    return (
        <div className='mobile__benefit__card'>
            <Image
                src={img}
                alt={title}
                title={title}
                width={190}
                height={155}
            />
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
        </div>
    )
}
