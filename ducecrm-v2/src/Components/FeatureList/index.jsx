import React from 'react'
import MapFeature from './mapFeature'
import { FeatureListCopy } from '@/WebCopy/FeatureCopy'

export default function FeatureList() {
    return (
        <>
            <MapFeature featureArray={FeatureListCopy} />
        </>
    )
}
