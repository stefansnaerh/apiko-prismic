
import { createClient } from '../prismicio'
import { useState } from 'react'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import Navigation from "../customTypeComponents/navigation/navigation"
import ContactElements from "../customTypeComponents/contactElements/contactElements"
import Footer from "../customTypeComponents/footer/footer"

import styles from '../styles/Home.module.css'


const Dentists = ( {dentistsContainer} ) => {
  
    return (
        <>
          <section className={styles.dentistsContainer} >
            <div className={styles.headlineContainer}>
              <h1>Tannlæknar</h1>
              <div className={styles.yellowLine}></div>
            </div>
            <SliceZone slices={dentistsContainer.data.slices} components={components}   />
          </section>
        </>
    )
}

 
export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const dentistsContainer = await client.getSingle('dentists')
  
    return {
      props: {
        dentistsContainer
      }
    }
  } 

export default Dentists