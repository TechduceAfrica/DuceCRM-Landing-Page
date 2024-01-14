import { FeatureCopy } from "@/WebCopy/FeatureCopy";
import FeatureList from "./FeatureList";

export default function FeatureSection() {
    return (
        <section className="feature__sec container__width">
            <h2 dangerouslySetInnerHTML={{ __html: FeatureCopy.title }} ></h2>
            <FeatureList/> 
        </section>
    )
}
