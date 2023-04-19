
import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { RichText } from 'prismic-reactjs'
import { components } from '../slices'

import styles from './../styles/bookAppointment/bookAppointment.module.scss'

const BookApointment = ( {bookAppointmentContainer} ) => {

    return (
        <section className={styles.container}>
            <RichText render={bookAppointmentContainer.data.title} />   
            <SliceZone slices={bookAppointmentContainer.data.slices} components={components}   />
        </section>
    )
}




 
export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const bookAppointmentContainer = await client.getSingle('book_appointment')
  
    return {
      props: {
        bookAppointmentContainer
      }
    }
  } 

export default BookApointment