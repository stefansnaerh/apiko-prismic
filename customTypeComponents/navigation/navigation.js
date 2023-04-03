

import styles from './navigation.module.css'

import { PrismicNextImage } from '@prismicio/next'
import { RichText, Link } from "prismic-reactjs"
import { motion } from 'framer-motion'
import Image from 'next/image'

import HamburgerButton from '../../components/hamburger/hamburger'

import calendarIcon from '../../public/calendar.svg'
import phoneIcon from '../../public/phone.png'

const Navigation = ( {navigationContainer, isHamburgerOpen, setIsHamburgerOpen} ) => {
    

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
            <motion.nav 
            className={styles.navbar}
            animate={isHamburgerOpen ? {x:-800}: {x : 0}}
            transition={{duration:0.5}}
            >
                <ul>
                    <a href={Link.url(navigationContainer.data.home_link)}>
                        <li>{navigationContainer.data.home_link_text }</li>
                    </a>
                    <a href={Link.url(navigationContainer.data.about_link)}>
                        <li>{navigationContainer.data.about_link_text }</li>
                    </a>
                    <a href={Link.url(navigationContainer.data.service_link)}>
                        <li>{navigationContainer.data.service_text }</li>
                    </a>
                    <a href='/dentists'>
                        <li>{navigationContainer.data.specialists_link_text }</li>
                    </a>
                    <a href={Link.url(navigationContainer.data.contact_link)}>
                        <li>{navigationContainer.data.contact_link_text }</li>
                    </a>
                </ul>
                <div className={styles.buttonContainer}>
                    <a href={`Tel: ${navigationContainer.data.phone_text}`}>
                        <span className={styles.navButton}>
                            <Image src={phoneIcon} height="26" alt="phone icon"/>
                            {navigationContainer.data.phone_number_text }
                        </span>
                    </a>
                    <a href={Link.url(navigationContainer.data.book_appointment_link)}>
                        <span >
                            <Image src={calendarIcon}  alt="calendar icon"/>
                            {navigationContainer.data.book_appointment_text }
                        </span>
                    </a>
                </div>
            </motion.nav>
        </header>
    )
}

export default Navigation