import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'
import styles from './textWithSlidingImages.module.scss'

const TextWithSlidingImages = ({ slice }) => (
  <section className={styles.container}>
    <div className={styles.textContainer}>
      <RichText render={slice.primary.title}/>
      <RichText render={slice.primary.paragraph}/>
    </div>
     <div className={styles.imagesContainer}>

    { slice?.items?.map((item, i) => { 
      console.log(item)
      return (
    <>
    <PrismicNextImage
      field={item.slideImage} 
      width={350}
      height={250} 
     />
     </>)})}

      <PrismicNextImage
        field={slice.primary.imageone}
        width={350}
        height={250} 
        />
        </div>
  </section>
)

export default TextWithSlidingImages