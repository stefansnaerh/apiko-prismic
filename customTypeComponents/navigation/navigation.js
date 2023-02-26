

import styles from './navigation.module.css'

import { PrismicNextImage } from '@prismicio/next'
import { RichText, Link } from "prismic-reactjs"

import { useState } from 'react'
import HamburgerButton from '../../components/hamburger'

const Navigation = ( {navigationContainer} ) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    return (
        <header className={styles.header}>
           <PrismicNextImage 
            field={navigationContainer.data.logo} 
            alt={""}
            height="70"
            /> 
            <div className={styles.logoTextContainer}>
            <RichText render={navigationContainer.data.logo_text} />
            <RichText render={navigationContainer.data.logo_subtext} />
            </div>
            <HamburgerButton
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
            />
            <nav>
                <ul>
                <a href={Link.url(navigationContainer.data.home_link)}><li>{navigationContainer.data.home_link_text }</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation