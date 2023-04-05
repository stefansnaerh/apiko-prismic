
import { createClient } from '../prismicio'
import { useState } from 'react'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import Navigation from "../customTypeComponents/navigation/navigation"
import ContactElements from "../customTypeComponents/contactElements/contactElements"
import Footer from "../customTypeComponents/footer/footer"

import styles from '../styles/Home.module.css'


const Dentists = ( {navigationContainer, contactElementsContainer, footerContainer, dentistsContainer} ) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    console.log(dentistsContainer)
    return (
        <>
        <Navigation
        navigationContainer={navigationContainer}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        />
            <section >
            <SliceZone slices={dentistsContainer.data.slices} components={components}   />
            </section>
        </>
    )
}

 
export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })
  
    const navigationContainer = await client.getSingle('navigation')
    const contactElementsContainer = await client.getSingle('contact_elements')
    const footerContainer = await client.getSingle('footer')
    const dentistsContainer = await client.getSingle('dentists')
  
    return {
      props: {
        navigationContainer,
        contactElementsContainer,
        footerContainer,
        dentistsContainer
      }
    }
  } 

export default Dentists