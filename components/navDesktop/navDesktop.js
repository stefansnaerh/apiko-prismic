

import styles from './navDesktop.module.scss'
import Image from 'next/image'
import calendarIcon from '../../public/calendar.svg'
import { useState, useEffect} from 'react'



const NavDesktop = ( {navigationContainer, handleScrollContact} ) => {

    const [underLineNav, setUnderLineNav] = useState()

    return (
        <nav className={styles.nav}>
            <ul>
                    <a href={'/'} >
                        <li onClick={() => setUnderLineNav('home')}>{navigationContainer.data.home_link_text }</li>
                        <div style={underLineNav === 'home' ? {backgroundColor : "#EBB45E"} : null}></div>
                    </a>
                     {/* here im directing the link to the uid instead of using the Link from prismic*/}
                    <a href={`/${navigationContainer.data.about_link.uid}`}>
                        <li onClick={() => setUnderLineNav('about')}>{navigationContainer.data.about_link_text }</li>
                        <div style={underLineNav === 'about' ? {backgroundColor : "#EBB45E"} : null}></div>
                    </a>
                    <a href={'/dentists'}>
                    <li onClick={() => setUnderLineNav('dentists')}>{navigationContainer.data.specialists_link_text }</li>
                    <div style={underLineNav === 'dentists' ? {backgroundColor : "#EBB45E"} : null}></div>
                    </a>
                    {/*<a href={Link.url(navigationContainer.data.service_link)}>
                        <li>{navigationContainer.data.service_text }</li>
                    </a>  */  }   
                    <a>         
                        <li  onClick={handleScrollContact}>
                            {navigationContainer.data.contact_link_text }
                            <div></div>
                        </li>
                    </a>
                    <a href={`/${navigationContainer.data.book_appointment_link.uid}`}>
                        <span className={styles.button} >
                            <Image src={calendarIcon} height={'20'}  alt="calendar icon"/>
                            {navigationContainer.data.book_appointment_text }
                        </span>
                    </a>
                </ul>
        </nav>
    )
}


export default NavDesktop