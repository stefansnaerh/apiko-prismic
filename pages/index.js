import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'

import { PrismicNextImage } from '@prismicio/next'

import Hero from '../customTypeComponents/Hero/hero'
import Navigation from '../customTypeComponents/navigation/navigation'

import styles from '../styles/Home.module.css'





const Page = ({ heroContainer, compInfoContainer, navigationContainer, settings }) => {
  console.log(navigationContainer)
  return (
    <div>
      <Navigation
      navigationContainer={navigationContainer}
      />
      <div className={styles.mainContainer}>
      <Hero
      heroContainer={heroContainer}
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