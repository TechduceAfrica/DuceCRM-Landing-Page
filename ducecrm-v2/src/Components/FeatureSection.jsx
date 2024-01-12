import { FeatureCopy } from "@/WebCopy/FeatureCopy";
import FeatureList from "./FeatureList";

export default function FeatureSection() {
    return (
        <div className="feature__sec container__width grid__j__items__cen">
            <h2 dangerouslySetInnerHTML={{ __html: FeatureCopy.title }} ></h2>
            <FeatureList/> 
        </div>
    )
}
