import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicNextImage } from '@prismicio/next'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import styles from './textWithSlidingImages.module.scss'
import Imgix from 'react-imgix'

import chevronRight from '../../public/chevronRight.svg'
import chevronLeft from '../../public/chevronLeft.svg'


const TextWithSlidingImages = ({ slice }) => {
  // state to handle sliding images inside motion.div
  const [index, setIndex] = useState(0) 

  // counting nr of images and adding 1 so it goes to 0 if the counter goes over nr of images
  const imgCount = slice.items.length
  const slideRight = () => {
   if(index === imgCount){
    setIndex(index - imgCount)
   } else {
    setIndex(index +1)
   }
   console.log(index)
  }
console.log(slice)
  return (
  <section className={styles.container}>
    <div className={styles.textContainer}>
      <RichText render={slice.primary.title}/>
      <RichText render={slice.primary.paragraph}/>
    </div>
    <div className={styles.imagesContainer}>
      <div className={styles.chevronRight} onClick={slideRight}>
        <Image
        src={chevronRight}
        alt='chevron right'
        />
      </div>
      <div className={styles.chevronLeft} onClick={() => setIndex(-1)}>
        <Image
        src={chevronLeft}
        alt='chevron right'
        />
      </div>
    {slice?.items?.map((item, i) => { 
      console.log(item)
      return (
      <motion.div 
      key={i}
      animate={index === i ? {x:0}  : {x:400}}
      transition={{duration:0.5}}
      >
        <Imgix
          src={item.slideimage.url} 
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