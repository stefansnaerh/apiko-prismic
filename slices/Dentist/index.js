import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'

import styles from './dentist.module.css'

const Dentist = ({ slice }) => (
  
  <section className={styles.container}>
    <div className={styles.imgContainer}>
      <PrismicNextImage
      field={slice.primary.profile_image}
      width={240}
      height={240}
      />
    </div>
    <div className={styles.textContainer}>
      <RichText render={slice.primary.name} />
      <RichText render={slice.primary.education} />
    </div>
    <div className={styles.yellowLine}></div>
  </section>
)

export default Dentist