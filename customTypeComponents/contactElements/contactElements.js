


import styles from "./contactElements.module.css"
import { RichText, Link } from "prismic-reactjs"
import Image from "next/image"

import phoneIcon from '../../public/phone.png'
import mailIcon from '../../public/mail.svg'
import locationIcon from '../../public/location.svg'


const ContactElements = ( {contactElementsContainer} ) => {
    
    return (
        <section className={styles.container}>
            <div>
                <RichText render={contactElementsContainer.data.phone_paragraph} />           
                <a  href={Link.url(contactElementsContainer.data.phone_link)}>
                    <span className={styles.button} >
                        <Image src={phoneIcon} height="26" alt="phone icon"/>
                        {contactElementsContainer.data.phone_number}
                    </span>
                </a>
            </div>
            <span className={styles.yellowLine}></span>
            <div>
                <RichText render={contactElementsContainer.data.mail_paragraph} />           
                <a  href={Link.url(contactElementsContainer.data.mail_link)}>
                    <span className={styles.button} >
                        <Image src={mailIcon} height="20" alt="mail icon"/>
                        {contactElementsContainer.data.mail_address}
                    </span>
                </a>
            </div>
            <span className={styles.yellowLine}></span>
            <div>
                <RichText render={contactElementsContainer.data.location_paragraph} />           
                <a  href={Link.url(contactElementsContainer.data.location_link)}>
                    <span className={styles.button} >
                        <Image src={locationIcon} height="20" alt="location icon"/>
                        {contactElementsContainer.data.location}
                    </span>
                </a>
            </div>
        </section>
    )
}


export default ContactElements