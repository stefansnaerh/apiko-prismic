
import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import styles from '../styles/dentists/dentists.module.scss'


const Dentists = ( {dentistsContainer} ) => {
  
    return (
        <>
          <section className={styles.container} >
            <div className={styles.headlineContainer}>
              <h1>Tannlæknar</h1>
            </div>
            <div className={styles.dentistsContainer}>
              <SliceZone slices={dentistsContainer.data.slices} components={components} />
            </div>
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