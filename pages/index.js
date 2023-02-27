
import { createClient } from '../prismicio'
import { useState } from 'react'

import Hero from '../customTypeComponents/Hero/hero'
import Navigation from '../customTypeComponents/navigation/navigation'

import styles from '../styles/Home.module.css'





const Page = ({ heroContainer, compInfoContainer, navigationContainer, settings }) => {
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
      </div>
    </div>
  )
}
 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const heroContainer = await client.getSingle('homepage')
  const compInfoContainer = await client.getAllByType('company_info')
  const navigationContainer = await client.getSingle('navigation')

  return {
    props: {
      heroContainer,
      compInfoContainer,
      navigationContainer
    }
  }
} 