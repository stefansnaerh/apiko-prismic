
import styles from './navMobile.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from 'prismic-reactjs'

import calendarIcon from '../../public/calendar.svg'
import phoneIcon from '../../public/phone.png'


const NavMobile = ({ navigationContainer, isHamburgerOpen }) => {
    return (
        <motion.nav 
            className={styles.navbar}
            animate={isHamburgerOpen ? {x:-800}: {x : 0}}
            transition={{duration:0.5}}
            >
                <ul>
                    <a href={'/'} >
                        <li>{navigationContainer.data.home_link_text }</li>
                    </a>
                     {/* here im directing the link to the uid instead of using the Link from prismic*/}
                    <a href={`/${navigationContainer.data.about_link.uid}`}>
                        <li>{navigationContainer.data.about_link_text }</li>
                    </a>
                    <a href={Link.url(navigationContainer.data.service_link)}>
                        <li>{navigationContainer.data.service_text }</li>
                    </a>
                    <a href={'/dentists'}>
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
                    <a href={`/${navigationContainer.data.book_appointment_link.uid}`}>
                        <span >
                            <Image src={calendarIcon}  alt="calendar icon"/>
                            {navigationContainer.data.book_appointment_text }
                        </span>
                    </a>
                </div>
            </motion.nav>
    )
}

export default NavMobile