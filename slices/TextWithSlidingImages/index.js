import React from 'react'
import { RichText } from 'prismic-reactjs'

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

  // Functions that handle the image slider
  // takes the index of the photo and hides the other photos
  const slideRight = () => {
    if (index === imgCount -1 ) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }

  const slideLeft = () => {
      if (index === 0){
        setIndex(imgCount - 1)
      }
      else {
        setIndex(index - 1)
      }
  }

  return (
  <section className={styles.container}>
    <div className={styles.textContainer}>
     {slice.primary.title ? <RichText render={slice.primary.title}/>: null}
      {slice.primary.paragraph? <RichText render={slice.primary.paragraph}/> : null}
    </div>
    { slice.items && slice.items[0] && slice.items[0].slideimage.url ? 
    <>
     <div className={styles.imagesContainerMobile} >
      <div className={styles.chevronRight} onClick={slideRight} >
        <Image
        src={chevronRight}
        alt='chevron right'
        />
      </div>
      <div className={styles.chevronLeft} onClick={slideLeft} >
        <Image
        src={chevronLeft}
        alt='chevron right'
        />
      </div>
    {slice?.items?.map((item, i) => { 
      item.slideimage && item.slideimage.url ? (
       (
        <motion.div 
        key={i}
        animate={index === i ? {opacity : 1}  : {opacity: 0}}
        transition={{duration:0.5}}
        initial={false}
        >
          <Imgix
            src={item.slideimage.url} 
            width={350}
            height={250}
            imgixParams={{
              auto: 'format',
              q:100,
              usm:10,
              cs:'srgb'
            }}
          />
        </motion.div>
     )): null})}
    </div>
    <div className={styles.imagesContainerDesktop}>
    {slice?.items?.map((item, i) => { 
      return (
        <>
          <Imgix
            src={item.slideimage.url} 
            sizes='(min-width: 1600px ) 400px, 350px'
            imgixParams={{
              auto: 'format',
              q:100,
              usm:10,
              cs:'srgb'
            }}
          />
        </>
     )})}
          </div>
          </> : null}
  </section>
  )
}

export default TextWithSlidingImages