


import styles from "./contactElements.module.scss"
import { RichText, Link } from "prismic-reactjs"
import Image from "next/image"

import phoneIcon from '../../public/phone.svg'
import mailIcon from '../../public/mail.svg'
import locationIcon from '../../public/location.svg'
import mailIconYellow from '../../public/mailIconYellow.svg'
import houseIconYellow from '../../public/houseIconYellow.svg'
import phoneIconYellow from '../../public/phoneIconYellow.svg'


const ContactElements = ( {contactElementsContainer} ) => {
    
    return (
        <section className={styles.container}>
            <div>
                <Image
                src={phoneIconYellow}
                alt="phone icon"
                className={styles.yellowIcons}
                height={32}
                width={32}
                />
                <RichText render={contactElementsContainer.data.phone_paragraph} />           
                <a  href={`tel:${contactElementsContainer.data.phone_number}`}>
                    <span className={styles.button} >
                        <Image src={phoneIcon} height={26} width={24} alt="phone icon"/>
                        {contactElementsContainer.data.phone_number}
                    </span>
                </a>
            </div>
            <span className={styles.yellowLine}></span>
            <div>
                <Image
                src={mailIconYellow}
                alt="mail icon"
                className={styles.yellowIcons}
                height={32}
                width={32}
                />
                <RichText render={contactElementsContainer.data.mail_paragraph} />           
                <a  href={`mailto:${contactElementsContainer.data.mail_address}`}>
                    <span className={styles.button} >
                        <Image src={mailIcon} height="20" alt="mail icon"/>
                        {contactElementsContainer.data.mail_address}
                    </span>
                </a>
            </div>
            <span className={styles.yellowLine}></span>
            <div>
                <Image
                src={houseIconYellow}
                alt="phone icon"
                className={styles.yellowIcons}
                height={36}
                width={36}
                />
                
                <RichText render={contactElementsContainer.data.location_paragraph} />           
                <a  href={Link.url(contactElementsContainer.data.location_link)}>
                    <span className={styles.button} >
                        <Image src={locationIcon} height={20} alt="location icon"/>
                        {contactElementsContainer.data.location}
                    </span>
                </a>
            </div>
        </section>
    )
}


export default ContactElements