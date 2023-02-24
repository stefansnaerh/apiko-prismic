import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'


import styles from './companyInfo.module.css'

const CompanyInfo = ({ slices }) => {
  console.log(slices)
 return  (
  <section className={styles.container}>
    <h1 className={styles.test}>heheheheh</h1>
    <RichText render={slice.primary.title} />
    <PrismicNextImage 
        field={slice.primary.image}
        fill = "cover"
        alt={slice.primary.image.alt} />
  </section>
)

}


export default CompanyInfo