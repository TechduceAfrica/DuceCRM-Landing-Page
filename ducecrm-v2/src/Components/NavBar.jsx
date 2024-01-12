import React from 'react'
import { Logo as logo } from '@/WebCopy/logo'
import Image from 'next/image'
import PriBtn from './PriBtn'
import { NavCopy, NavBtn } from '@/WebCopy/NavCopy'

export default function NavBar() {
    return (
        <>
            <header className='grid__j__items__cen'>
                <div className="nav__bar container__width">
                    <div className="logo">
                        <a href="/" title="DuceCRM">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                title={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                priority
                            />
                        </a>
                    </div>

                    <nav className="desk__nav">
                        <ul>
                            {NavCopy.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.Link} 
                                        title={item.Menu}
                                    >
                                            {item.Menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <div className='nav__btn'>
                        <PriBtn {...NavBtn}/>
                    </div>

                    <div className="mobile__nav">
                        <div className="bar__one"></div>
                        <div className="bar__two"></div>
                        <div className="bar__three"></div>
                    </div>
                </div>
                    
            </header>
        </>
    )
}
