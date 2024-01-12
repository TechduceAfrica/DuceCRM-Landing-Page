import Image from "next/image";

export default function FeatureEach({ sub, title, desc, img, width, height }) {
    return (
        <div className="feature__section">
            <div>
                <span className="feature__section__label">
                    {sub}
                </span>
                <h3>
                    {title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: desc }}></p>
            </div>
            <div className="feature__section__image">
                <Image
                    src={img}
                    alt={title}
                    title={sub}
                    width={width}
                    height={height}
                />
            </div>
        </div>
    )
}
