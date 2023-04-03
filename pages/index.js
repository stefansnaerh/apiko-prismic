
import { createClient } from '../prismicio'
import { useState } from 'react'

import Hero from '../customTypeComponents/Hero/hero'
import Navigation from '../customTypeComponents/navigation/navigation'
import CompanyInfo from '../customTypeComponents/compInfo/compInfo'
import ContactElements from '../customTypeComponents/contactElements/contactElements'
import Footer from '../customTypeComponents/footer/footer'

import styles from '../styles/Home.module.css'





const Page = ({ heroContainer, compInfoContainer, navigationContainer, contactElementsContainer, footerContainer }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <div>
      <Navigation
      navigationContainer={navigationContainer}
      isHamburgerOpen={isHamburgerOpen}
      setIsHamburgerOpen={setIsHamburgerOpen}
      />
        <div className={styles.mainContainer}>
          <Hero
          heroContainer={heroContainer}
          isHamburgerOpen={isHamburgerOpen}
          setIsHamburgerOpen={setIsHamburgerOpen}
          />
          <div className={styles.compInfoContainer}>
          {compInfoContainer.map(compInfo => {
            return (
              <div key={compInfo.id}>
              <CompanyInfo
              compInfo={compInfo}/>
              </div>
            )
          })}
        </div>
        <ContactElements
        contactElementsContainer={contactElementsContainer}
        />
      </div>
      <Footer
      footerContainer={footerContainer}
      />
    </div>
  )
}
 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const heroContainer = await client.getSingle('homepage')
  const compInfoContainer = await client.getAllByType('company_info')
  const navigationContainer = await client.getSingle('navigation')
  const contactElementsContainer = await client.getSingle('contact_elements')
  const footerContainer = await client.getSingle('footer')

  return {
    props: {
      heroContainer,
      compInfoContainer,
      navigationContainer,
      contactElementsContainer,
      footerContainer
    }
  }
} 