import { HeroCopy } from "@/WebCopy/HeroCopy";
import Image from "next/image";
import FormPopUp from "./Popups/FormPopUp";
import { handleOpenPopup } from './Popups/handlePopUpForm'

export default function HeroSection() {
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
