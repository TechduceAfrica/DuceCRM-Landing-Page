'use client'
import React from 'react'
import YouTube from 'react-youtube';

export default function Video({ videoId }) {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
        autoplay: 0,
        rel: 0,
        },
    };

    return (
        <div className='popup__video__container'>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    )
}
