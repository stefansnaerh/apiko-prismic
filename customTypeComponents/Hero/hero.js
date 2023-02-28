
import styles from "./hero.module.css"
import { motion } from "framer-motion"
import { PrismicNextImage } from '@prismicio/next'
import { RichText, Link } from "prismic-reactjs"



const Hero = ({ heroContainer, isHamburgerOpen }) => {

  return (
    <section className={styles.container}>
        <div className={styles.imageContainer}>
            <PrismicNextImage 
                field={heroContainer.data.cover_photo_desktop}
                alt={heroContainer.data.cover_photo}
               />
        </div>
        {!isHamburgerOpen ?  (
          <div className={styles.sloganButtonsContainer}>
          <RichText render={heroContainer.data.company_slogan} />
          <div className={styles.buttonsContainer}>
            <a  href={Link.url(heroContainer.data.about_company_link)}>
              <span >{heroContainer.data.about_link_text }</span>
            </a>
            <a  href={Link.url(heroContainer.data.book_appointment_link)}>
              <span >{heroContainer.data.book_appointment_text }</span>
            </a>
          </div>
        </div>
        ) : null}

    </section>
  )
}

export default Hero
 
