import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './textWithSlidingImages.module.scss'

const TextWithSlidingImages = ({ slice }) => {
  const [index, setIndex] = useState(0) 

  return (
  <section className={styles.container}>
    <div className={styles.textContainer}>
      <RichText render={slice.primary.title}/>
      <RichText render={slice.primary.paragraph}/>
    </div>
    <div className={styles.imagesContainer}>
    {slice?.items?.map((item, i) => { 
      console.log(item)
      return (
      <motion.div 
      key={i}
      animate={index === i ? {x:0} : {x:0}}
      >
        <PrismicNextImage
          field={item.slideImage} 
          width={350}
          height={250} 
        />
      </motion.div>
     )})}
    </div>
  </section>
  )
}

export default TextWithSlidingImages