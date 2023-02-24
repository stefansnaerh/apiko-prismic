import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'

import { PrismicNextImage } from '@prismicio/next'

import Hero from '../customTypeComponents/Hero/hero'





const Page = ({ heroContainer, compInfoContainer, navigation, settings }) => {

  return (
    <div>
      <Hero
      heroContainer={heroContainer}
      />
      
    </div>
  )
}
 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const heroContainer = await client.getSingle('homepage')
  const compInfoContainer = await client.getAllByType('company_info')

  return {
    props: {
      heroContainer,
      compInfoContainer
    }
  }
} 