import React from 'react'
import { RichText } from 'prismic-reactjs'
import Imgix from 'react-imgix'

import styles from './dentist.module.scss'

const Dentist = ({ slice }) => (
  
  <section className={styles.container}>
    <div className={styles.imgContainer}>
      <Imgix
        src={`${slice.primary.profile_image.url}`}
        srcset=""
        sizes='(min-width: 525px ) 280px, 250px'
        imgixParams={{ 
            auto:'format',
            q:100,
            usm:10,
            cs:'srgb'
        }}/>
    </div>
    <div className={styles.textContainer}>
      <RichText render={slice.primary.name} />
      <RichText render={slice.primary.education} />
    </div>
    <div className={styles.yellowLine}></div>
  </section>
)

export default Dentist