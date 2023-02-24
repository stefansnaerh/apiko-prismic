import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'
import { Link } from 'prismic-reactjs'

import styles from './landingPage.module.css'

const LandingPage = ({ slice }) => (
  <section className={styles.background}>
    <div className={styles.imageContainer}>
      <div className={styles.desktop}>
        <PrismicNextImage 
        field={slice.primary.background_image_desktop}
        fill = "cover"
        alt={slice.primary.background_image_desktop.alt} />
        </div>
        <div className={styles.tablet}>
        <PrismicNextImage 
        field={slice.primary.background_image_tablet}
        fill = "cover"
        alt={slice.primary.background_image_tablet.alt} />
        </div>
        <div className={styles.mobile}>
        <PrismicNextImage 
        field={slice.primary.background_image_mobile}
        fill = "cover"
        alt={slice.primary.background_image_mobile.alt} />
      </div>
      <div className={styles.buttonHeadlineContainer}>
        <div className={styles.headline}>
          <RichText render={slice.primary.welcome_text}/>
        </div>
        <div className={styles.buttonsContainer}>
          <a href={Link.url(slice.primary.book_more_link)}>
            <span className={styles.readMore}>{ slice.primary.more_text}</span>
          </a>
          <a href={Link.url(slice.primary.book_appointment_link)}>
            <span className={styles.bookAppointment} >{slice.primary.book_appointment_text}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default LandingPage