import React from 'react';
import FeatureEach from "./FeatureEach";

export default function MapFeature({ featureArray }) {
    return (
        <>
            {Array.isArray(featureArray) &&
                featureArray.map((features, index) => (
                    <FeatureEach 
                        key={index} 
                        {...features}
                    />
            ))}
        </>
    )
}
