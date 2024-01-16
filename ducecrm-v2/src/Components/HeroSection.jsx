'use client'
import { HeroCopy } from "@/WebCopy/HeroCopy";
import Image from "next/image";
import FormPopUp from "./Popups/FormPopUp";

export default function HeroSection() {

    const handleOpenPopup = () => {
        const popUpOpener = document.querySelector('.form__popup');
        if (popUpOpener) {
            popUpOpener.classList.toggle('open');
        }
    };

    return (
        <>
            <section className="DC__hero__section container__width">
                <div>
                    <h1>
                        {HeroCopy.title}
                    </h1>
                    <p dangerouslySetInnerHTML={{ __html: HeroCopy.description }} >
                    </p>
                    <span onClick={handleOpenPopup}>
                        {HeroCopy.link}
                    </span>
                </div>
                <div>
                    <Image
                        src={HeroCopy.img}
                        alt={HeroCopy.title}
                        title={HeroCopy.title}
                        width={HeroCopy.width}
                        height={HeroCopy.height}
                        priority
                    />
                </div>
            </section>
            <FormPopUp/>
        </>
    )
}
